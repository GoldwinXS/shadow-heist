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
// High enough that the front wall (h=4) never hides the player near it.
const CAM_OFFSET = new THREE.Vector3(0, 10, 5.5);
const CAM_LERP = 0.06;
const DETECT_DECAY = 0.4;      // per second in shadow (generous)
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

  // Cold "moonlight" fill: when the guards became narrow spot cones the level
  // lost most of its illumination and became unreadable. A faint directional
  // wash restores spatial reading (and drowns fog grain, which is most
  // visible against black) while the beams stay the bright threats. NOT a
  // guard light — detection only consults L.guards, so gameplay is unchanged.
  const moon = new THREE.DirectionalLight(0x9db4d6, 0.55);
  moon.position.set(-14, 20, 8);
  moon.userData.rtRadius = 0.06; // slightly soft moon shadows
  scene.add(moon, moon.target);

  // --- Renderer + raytracer ---
  setBoot("starting ray tracer…");
  const renderer = new THREE.WebGLRenderer({ antialias: false });
  renderer.setPixelRatio(1);
  renderer.setSize(window.innerWidth || 1280, window.innerHeight || 720);
  document.getElementById("app").appendChild(renderer.domElement);

  const rt = new RealtimeRaytracer(renderer, {
    renderScale: 0.5,
    // Was 16 pre-ReSTIR; blue noise + reservoirs keep moving shadows honest
    // at a longer history, and the extra accumulation smooths the dark scene.
    maxHistory: 40,
    envColor: new THREE.Color(0x121826), // lifted ambient keeps shadow areas readable
    // Atmosphere: single-scatter fog turns the guard spot cones into visible
    // sweeping beams — the whole point of the SpotLight upgrade.
    // Kept LOW: the guard lights move every frame, so fog never converges —
    // density is the noise-vs-atmosphere dial (the library's wide fog blur
    // handles the rest).
    // Lower now that the moonlight carries readability — fog is pure mood.
    volumetric: { enabled: true, density: 0.007 },
    // Adaptive quality governor keeps the frame rate near target on weak GPUs by
    // steering renderScale / denoise / stochastic sampling. restir and
    // overloadProtection are left at their (on-by-default) values.
    adaptiveQuality: true,
    targetFps: 55,
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
    // Detection (and the run timer) only engage once the player has actually
    // moved — an untouched player at spawn/respawn can never be detected.
    moved: false,        // any movement input since the last spawn/respawn
    timerStarted: false, // first movement of the whole run starts the clock
    best: parseFloat(localStorage.getItem("shadowHeistBest")) || null,
  };
  const vel = new THREE.Vector3();
  const testInput = { active: false, x: 0, z: 0 }; // playtest input override

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
    state.started = true; // the run clock starts on first movement, not here
    el.start.classList.add("hidden");
  }
  el.start.addEventListener("click", startGame);
  el.playAgain.addEventListener("click", () => location.reload());

  // --- Detection raycasting ---
  const ray = new THREE.Raycaster();
  ray.far = 30;
  const tmpDir = new THREE.Vector3();
  const eyePos = new THREE.Vector3();
  const spotDir = new THREE.Vector3();   // cone axis: normalize(target - light)
  const toPlayer = new THREE.Vector3();  // from the light toward the player

  function isLitAt(px, pz) {
    // A position is lit if ANY guard SPOTLIGHT has the player (a) within range,
    // (b) inside its cone, and (c) with clear line of sight. The cone test is
    // what makes the guards directional: a player behind or beside a beam is in
    // shadow even at point-blank range.
    eyePos.set(px, 0.5, pz); // sample near orb centre height
    let litNow = false;
    let closest = 1e9;
    for (const g of L.guards) {
      const lp = g.light.position;
      const dist = eyePos.distanceTo(lp);
      if (dist > g.range) continue; // (a) range

      // (b) cone: player must be inside the spotlight's outer angle.
      // cone axis = normalize(target - light); dir to player = normalize(eye - light).
      spotDir.copy(g.light.target.position).sub(lp).normalize();
      toPlayer.copy(eyePos).sub(lp).normalize();
      if (spotDir.dot(toPlayer) < Math.cos(g.light.angle)) continue; // outside the cone

      // (c) occlusion: cast from the player toward the light.
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
  const isLit = () => isLitAt(player.position.x, player.position.z);

  // --- Collision: circle-vs-oriented-box + circle-vs-circle in XZ ---
  // The player is a circle of radius PLAYER_R (top-down). Boxes may be rotated
  // about Y, so we resolve in each box's LOCAL frame against its true faces —
  // no world-AABB, so the player can hug the real rotated edges with no phantom
  // blocked wedge in the corners.
  const boxes = L.boxes;
  const cylinders = L.cylinders;

  // Resolve the player against one oriented box. Mutates pos in place and kills
  // the inward velocity component so the player slides along the face.
  function collideOBB(pos, b) {
    const cs = Math.cos(b.rotationY), sn = Math.sin(b.rotationY);
    // World → local: translate to box center, then rotate by -θ.
    const dx = pos.x - b.center.x, dz = pos.z - b.center.z;
    const lx = dx * cs + dz * sn;      // rotate(-θ)
    const lz = -dx * sn + dz * cs;
    const hx = b.halfExtents.x, hz = b.halfExtents.z;

    // Closest point on the box to the player, in local space.
    const clx = Math.max(-hx, Math.min(hx, lx));
    const clz = Math.max(-hz, Math.min(hz, lz));
    let nlx = lx - clx, nlz = lz - clz;           // local delta to closest pt
    let d2 = nlx * nlx + nlz * nlz;

    if (d2 > PLAYER_R * PLAYER_R) return;          // no overlap

    let pushX, pushZ;                              // local push-out vector
    if (d2 > 1e-8) {
      const d = Math.sqrt(d2);
      const pen = PLAYER_R - d;
      pushX = (nlx / d) * pen;
      pushZ = (nlz / d) * pen;
    } else {
      // Center is INSIDE the box → push out along axis of least penetration.
      const penX = hx - Math.abs(lx) + PLAYER_R;
      const penZ = hz - Math.abs(lz) + PLAYER_R;
      if (penX < penZ) { pushX = (lx < 0 ? -penX : penX); pushZ = 0; }
      else { pushX = 0; pushZ = (lz < 0 ? -penZ : penZ); }
    }

    // Local → world: rotate push by +θ and apply.
    const wpx = pushX * cs - pushZ * sn;
    const wpz = pushX * sn + pushZ * cs;
    pos.x += wpx;
    pos.z += wpz;

    // Remove the velocity component along the collision normal (slide).
    const nlen = Math.hypot(wpx, wpz);
    if (nlen > 1e-6) {
      const nx = wpx / nlen, nz = wpz / nlen;
      const vn = vel.x * nx + vel.z * nz;
      if (vn < 0) { vel.x -= vn * nx; vel.z -= vn * nz; }
    }
  }

  function collideCylinder(pos, c) {
    const dx = pos.x - c.center.x, dz = pos.z - c.center.z;
    const rr = c.radius + PLAYER_R;
    const d2 = dx * dx + dz * dz;
    if (d2 > rr * rr || d2 < 1e-8) return;
    const d = Math.sqrt(d2);
    const nx = dx / d, nz = dz / d;
    const pen = rr - d;
    pos.x += nx * pen;
    pos.z += nz * pen;
    const vn = vel.x * nx + vel.z * nz;
    if (vn < 0) { vel.x -= vn * nx; vel.z -= vn * nz; }
  }

  function resolveCollisions(pos) {
    // Two passes so a player wedged into a corner between two colliders gets
    // pushed clear of both rather than oscillating.
    for (let i = 0; i < 2; i++) {
      for (const b of boxes) collideOBB(pos, b);
      for (const c of cylinders) collideCylinder(pos, c);
    }
  }

  function respawn(caught) {
    player.position.copy(L.spawn);
    vel.set(0, 0, 0);
    state.meter = 0;
    state.lit = false;
    state.moved = false; // detection re-arms on the next movement input
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
      // Input → acceleration. testInput lets automated playtests drive the
      // player through the exact same code path as the keyboard.
      let ix = 0, iz = 0;
      if (testInput.active) {
        ix = testInput.x; iz = testInput.z;
      } else {
        if (keys.has("w") || keys.has("arrowup")) iz -= 1;
        if (keys.has("s") || keys.has("arrowdown")) iz += 1;
        if (keys.has("a") || keys.has("arrowleft")) ix -= 1;
        if (keys.has("d") || keys.has("arrowright")) ix += 1;
      }
      const len = Math.hypot(ix, iz);
      if (len > 0) {
        // First movement since spawn/respawn arms detection; the first
        // movement of the whole run starts the clock.
        if (!state.moved) {
          state.moved = true;
          if (!state.timerStarted) {
            state.timerStarted = true;
            state.startTime = performance.now();
          }
        }
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

      // Integrate, then resolve the player circle against all colliders.
      player.position.x += vel.x * dt;
      player.position.z += vel.z * dt;
      resolveCollisions(player.position);
      player.position.y = PLAYER_R; // keep on floor

      // Detection — only once the player has moved since spawn/respawn. An
      // idle player is never detected, so respawn loops are impossible.
      if (state.moved) {
        const { litNow, closest } = isLit();
        state.lit = litNow;
        if (litNow) {
          const g = L.guards.reduce((a, b) => (b.range > a.range ? b : a));
          // Gentle at the edge of a pool (~0.12/s), dangerous at the centre
          // (~0.52/s → caught in ~2s of standing directly under a light).
          const rate = 0.4 * (1 - Math.min(1, closest / g.range)) + 0.12;
          state.meter = Math.min(1, state.meter + rate * dt);
        } else {
          state.meter = Math.max(0, state.meter - DETECT_DECAY * dt);
        }
        if (state.meter >= 1) respawn(true);
      } else {
        state.lit = false;
        state.meter = Math.max(0, state.meter - DETECT_DECAY * dt);
      }

      // Win check.
      const dx = player.position.x - L.exit.x;
      const dz = player.position.z - L.exit.z;
      if (Math.hypot(dx, dz) < WIN_RADIUS) doWin();

      // Timer — runs only once the run has actually started (first movement).
      if (state.timerStarted) state.elapsed = (performance.now() - state.startTime) / 1000;
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
      // Detection probe for automated tests: is position (x,z) lit when the
      // patrols are at time t? (Repositions the guard lights; the next real
      // frame's patrol() call restores them.)
      checkLitAt(x, z, t) {
        if (t != null) for (const g of L.guards) g.patrol(t);
        return isLitAt(x, z).litNow;
      },
      // Playtest input override — routes through the real movement code.
      setInput(x, z) { testInput.active = true; testInput.x = x; testInput.z = z; },
      clearInput() { testInput.active = false; testInput.x = 0; testInput.z = 0; },
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
