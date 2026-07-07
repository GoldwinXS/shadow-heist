/**
 * Shadow Heist — a top-down-ish stealth game showcasing three-realtime-rt.
 *
 * The ray tracer owns all lighting. The three patrolling guard lights are moved
 * every frame and re-read via rt.updateLights(); the player orb is a dynamic
 * mesh so it casts a real, moving ray traced shadow (rt.updateDynamic()).
 *
 * The stealth mechanic reuses the same shadow-ray idea the renderer uses: each
 * frame we cast a THREE.Raycaster from the player to each guard light and, if
 * unobstructed and in range, the player is "lit" and the detection meter rises.
 */
import * as THREE from "three";
import { RealtimeRaytracer } from "three-realtime-rt";
import { buildLevel } from "./level.js";

const boot = document.getElementById("boot");
const bootMsg = document.getElementById("boot-msg");
const setBoot = (t) => { if (bootMsg) bootMsg.textContent = t; };

// --- Tunables ---
const PLAYER_R = 0.35;
const MAX_SPEED = 4.5;
const ACCEL = 34;       // u/s^2 toward input direction
const DAMPING = 9;      // velocity decay when no input
const CAM_OFFSET = new THREE.Vector3(0, 9, 7);
const CAM_LERP = 0.06;
const DETECT_DECAY = 0.3;      // per second in shadow
const WIN_RADIUS = 1.6;        // distance to exit that counts as a win

async function main() {
  setBoot("building vault…");
  const L = buildLevel();
  const { scene, camera } = L;

  // --- Player orb (dynamic mesh → moving ray traced shadow) ---
  const player = new THREE.Mesh(
    new THREE.SphereGeometry(PLAYER_R, 24, 16),
    new THREE.MeshStandardMaterial({
      color: 0x0d2a2e, emissive: 0x33e0d0, emissiveIntensity: 0.6, roughness: 0.4,
    })
  );
  player.position.copy(L.spawn);
  scene.add(player);

  // --- Renderer + raytracer ---
  setBoot("starting ray tracer…");
  const renderer = new THREE.WebGLRenderer({ antialias: false });
  renderer.setPixelRatio(1);
  renderer.setSize(window.innerWidth || 1280, window.innerHeight || 720);
  document.getElementById("app").appendChild(renderer.domElement);

  const rt = new RealtimeRaytracer(renderer, {
    renderScale: 0.5,
    maxHistory: 16,               // short history → moving lights/shadows react fast
    envColor: new THREE.Color(0x05070c),
  });

  setBoot("building BVH…");
  const t0 = performance.now();
  rt.compileScene(scene, { dynamicMeshes: [player] });
  console.log(
    `[shadow-heist] compiled in ${Math.round(performance.now() - t0)}ms: ` +
    `${rt.compiled.triangleCount.toLocaleString()} tris, ${rt.compiled.lightCount} lights`
  );

  camera.aspect = (window.innerWidth || 1280) / (window.innerHeight || 720);
  camera.updateProjectionMatrix();
  rt.setSize(window.innerWidth || 1280, window.innerHeight || 720);

  // --- Game state ---
  const state = {
    started: false,
    won: false,
    meter: 0,
    lit: false,
    attempts: 1,
    elapsed: 0,
    startTime: 0,
    best: parseFloat(localStorage.getItem("shadowHeistBest")) || null,
  };
  const vel = new THREE.Vector3();

  // --- Input ---
  const keys = new Set();
  const down = (e) => {
    const k = e.key.toLowerCase();
    keys.add(k);
    if (!state.started) startGame();
  };
  const up = (e) => keys.delete(e.key.toLowerCase());
  window.addEventListener("keydown", down);
  window.addEventListener("keyup", up);

  // --- HUD refs ---
  const el = {
    time: document.getElementById("hudTime"),
    attempts: document.getElementById("hudAttempts"),
    best: document.getElementById("hudBest"),
    meterFill: document.getElementById("meterFill"),
    eye: document.getElementById("eye"),
    detect: document.getElementById("detect"),
    vignette: document.getElementById("vignette"),
    flash: document.getElementById("flash"),
    start: document.getElementById("start"),
    win: document.getElementById("win"),
    winTime: document.getElementById("winTime"),
    winAttempts: document.getElementById("winAttempts"),
    winBest: document.getElementById("winBest"),
    playAgain: document.getElementById("playAgain"),
  };
  const fmt = (s) => s.toFixed(1) + "s";
  el.best.textContent = state.best != null ? fmt(state.best) : "—";
  el.attempts.textContent = state.attempts;

  function startGame() {
    if (state.started) return;
    state.started = true;
    state.startTime = performance.now();
    el.start.classList.add("hidden");
  }
  el.start.addEventListener("click", startGame);
  el.playAgain.addEventListener("click", () => location.reload());

  // --- Detection raycasting ---
  const ray = new THREE.Raycaster();
  ray.far = 30;
  const tmpDir = new THREE.Vector3();
  const eyePos = new THREE.Vector3();

  function isLit() {
    // Player is lit if ANY guard light has line of sight within range.
    eyePos.copy(player.position); eyePos.y = 0.5; // sample near orb centre
    let litNow = false;
    let closest = 1e9;
    for (const g of L.guards) {
      const lp = g.light.position;
      const dist = eyePos.distanceTo(lp);
      if (dist > g.range) continue;
      tmpDir.copy(lp).sub(eyePos).normalize();
      ray.set(eyePos, tmpDir);
      ray.far = dist - 0.1;
      const hits = ray.intersectObjects(L.occluders, false);
      if (hits.length === 0) {
        litNow = true;
        if (dist < closest) closest = dist;
      }
    }
    return { litNow, closest };
  }

  // --- Collision: per-axis AABB resolution against walls + crates ---
  const colliders = L.walls.concat(L.crates);
  function collideAxis(pos, axis) {
    for (const c of colliders) {
      // inflate box by player radius (sphere-vs-AABB, treated as AABB-vs-AABB)
      const minx = c.min.x - PLAYER_R, maxx = c.max.x + PLAYER_R;
      const minz = c.min.z - PLAYER_R, maxz = c.max.z + PLAYER_R;
      if (pos.x > minx && pos.x < maxx && pos.z > minz && pos.z < maxz) {
        if (axis === "x") {
          // push out along x toward nearest face
          if (Math.abs(pos.x - minx) < Math.abs(pos.x - maxx)) pos.x = minx;
          else pos.x = maxx;
          vel.x = 0;
        } else {
          if (Math.abs(pos.z - minz) < Math.abs(pos.z - maxz)) pos.z = minz;
          else pos.z = maxz;
          vel.z = 0;
        }
      }
    }
  }

  function respawn(caught) {
    player.position.copy(L.spawn);
    vel.set(0, 0, 0);
    state.meter = 0;
    if (caught) {
      state.attempts += 1;
      el.attempts.textContent = state.attempts;
      // Red flash.
      el.flash.classList.add("on");
      setTimeout(() => {
        el.flash.classList.remove("on");
      }, 90);
    }
    rt.resetAccumulation(); // teleport → clear lighting history
  }

  function doWin() {
    if (state.won) return;
    state.won = true;
    const t = state.elapsed;
    if (state.best == null || t < state.best) {
      state.best = t;
      localStorage.setItem("shadowHeistBest", String(t));
    }
    el.winTime.textContent = fmt(t);
    el.winAttempts.textContent = state.attempts;
    el.winBest.textContent = fmt(state.best);
    el.win.classList.add("show");
  }

  // --- Fixed camera-follow ---
  const camTarget = new THREE.Vector3();
  function updateCamera() {
    camTarget.copy(player.position).add(CAM_OFFSET);
    camera.position.lerp(camTarget, CAM_LERP);
    camera.lookAt(player.position);
  }
  // Snap camera to the player on load, but aim it at the room so the start
  // overlay has an atmospheric backdrop rather than the spawn-corner wall.
  camera.position.copy(L.spawn).add(CAM_OFFSET);
  camera.lookAt(-2, 0, 0);

  // --- Per-frame simulation step (also used by window.GAME.step for testing) ---
  function step(dt) {
    if (state.won) return;

    // Guard light patrols (always animate for a living scene, even pre-start).
    const t = performance.now() / 1000;
    for (const g of L.guards) g.patrol(t);
    rt.updateLights(scene);

    // Exit beacon pulse.
    const pulse = 2.0 + Math.sin(t * 2.2) * 0.9;
    L.exitBeacon.disc.material.emissiveIntensity = pulse;
    L.exitBeacon.ring.material.emissiveIntensity = 0.9 + Math.sin(t * 2.2) * 0.5;
    const sc = 1 + Math.sin(t * 2.2) * 0.04;
    L.exitBeacon.ring.scale.set(sc, 1, sc);

    if (state.started) {
      // Input → acceleration.
      let ix = 0, iz = 0;
      if (keys.has("w") || keys.has("arrowup")) iz -= 1;
      if (keys.has("s") || keys.has("arrowdown")) iz += 1;
      if (keys.has("a") || keys.has("arrowleft")) ix -= 1;
      if (keys.has("d") || keys.has("arrowright")) ix += 1;
      const len = Math.hypot(ix, iz);
      if (len > 0) {
        ix /= len; iz /= len;
        vel.x += ix * ACCEL * dt;
        vel.z += iz * ACCEL * dt;
      } else {
        // damping toward zero
        const d = Math.max(0, 1 - DAMPING * dt);
        vel.x *= d; vel.z *= d;
      }
      // clamp speed
      const sp = Math.hypot(vel.x, vel.z);
      if (sp > MAX_SPEED) { vel.x = vel.x / sp * MAX_SPEED; vel.z = vel.z / sp * MAX_SPEED; }

      // Integrate with per-axis collision.
      player.position.x += vel.x * dt;
      collideAxis(player.position, "x");
      player.position.z += vel.z * dt;
      collideAxis(player.position, "z");
      player.position.y = PLAYER_R; // keep on floor

      // Detection.
      const { litNow, closest } = isLit();
      state.lit = litNow;
      if (litNow) {
        const g = L.guards.reduce((a, b) => (b.range > a.range ? b : a));
        const rate = 0.55 * (1 - Math.min(1, closest / g.range)) + 0.15;
        state.meter = Math.min(1, state.meter + rate * dt);
      } else {
        state.meter = Math.max(0, state.meter - DETECT_DECAY * dt);
      }
      if (state.meter >= 1) respawn(true);

      // Win check.
      const dx = player.position.x - L.exit.x;
      const dz = player.position.z - L.exit.z;
      if (Math.hypot(dx, dz) < WIN_RADIUS) doWin();

      // Timer.
      state.elapsed = (performance.now() - state.startTime) / 1000;
    }

    // Player is a dynamic mesh → refit BVH so its shadow moves.
    rt.updateDynamic();
    updateCamera();
    updateHUD();
  }

  function updateHUD() {
    el.time.textContent = state.elapsed.toFixed(1);
    el.meterFill.style.width = (state.meter * 100).toFixed(1) + "%";
    if (state.lit) el.eye.classList.add("lit"); else el.eye.classList.remove("lit");
    el.vignette.style.opacity = state.lit ? String(0.35 + state.meter * 0.5) : "0";
    if (state.meter > 0.7) el.detect.classList.add("shake");
    else el.detect.classList.remove("shake");
  }

  // --- Resize ---
  window.addEventListener("resize", () => {
    const w = window.innerWidth || 1280, h = window.innerHeight || 720;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    rt.setSize(w, h);
  });

  // --- Expose for automated testing ---
  Object.assign(window, {
    RT: rt, SCENE: scene, CAMERA: camera,
    GAME: {
      player, rt, scene, camera,
      lights: L.lights, guards: L.guards,
      state,
      setPlayerPos(x, z) { player.position.set(x, PLAYER_R, z); vel.set(0, 0, 0); },
      detection: () => state.meter,
      lit: () => state.lit,
      win: () => state.won,
      start: () => startGame(),
      step,
      respawn,
    },
  });

  // --- Render loop ---
  let lastT = performance.now();
  let booted = false;
  function animate() {
    if (document.visibilityState === "hidden") { setTimeout(animate, 100); }
    else requestAnimationFrame(animate);

    const now = performance.now();
    const dt = Math.min((now - lastT) / 1000, 0.05);
    lastT = now;

    step(dt);
    rt.render(scene, camera);

    if (!booted) { booted = true; boot?.classList.add("hidden"); }
  }
  animate();
}

main().catch((err) => {
  console.error(err);
  if (boot) {
    boot.classList.remove("hidden");
    boot.innerHTML =
      `<div class="err"><b>Failed to start.</b>\n\n${err && err.message ? err.message : err}\n\nSee the console for details.</div>`;
  }
});
