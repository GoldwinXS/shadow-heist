import * as THREE from "three";

/**
 * Builds the museum vault: a dark rectangular room (open ceiling), scattered
 * crates / pillars / statues for cover, a dim fill light, three patrolling
 * guard lights, and the glowing exit pad.
 *
 * Returns everything the game loop needs:
 *   scene, camera, spawn, exit, occluders[], guards[], fill, exitBeacon,
 *   boxes (oriented-box colliders), cylinders (circle colliders)
 *
 * Colliders are exported in solver-friendly form so main.js can do proper
 * circle-vs-oriented-box (OBB) and circle-vs-circle resolution — no world-AABB
 * approximation, so the player can hug the true rotated faces of angled crates.
 *   box:      { center:Vector3, halfExtents:{x,z}, rotationY:number }
 *   cylinder: { center:Vector3, radius:number }
 *
 * The level is intentionally low-poly (boxes + cylinders) — the ray traced GI
 * makes flat geometry look great, and the low tri count keeps both the BVH and
 * the per-frame detection raycasts fast.
 */
export function buildLevel() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x030407);

  // Room extents. Interior playfield is roughly ±ROOM.x by ±ROOM.z.
  const ROOM = { x: 12, z: 8, wallH: 4, t: 0.4 };

  const camera = new THREE.PerspectiveCamera(50, 1.6, 0.1, 120);
  camera.position.set(-9, 10, 8);

  // --- Materials: dark, desaturated. GI does the heavy lifting. ---
  const floorMat = new THREE.MeshStandardMaterial({ color: 0x2a2d33, roughness: 0.9, metalness: 0.05 });
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x232830, roughness: 0.95 });
  const crateMat = new THREE.MeshStandardMaterial({ color: 0x3a352c, roughness: 0.85 });
  const stoneMat = new THREE.MeshStandardMaterial({ color: 0x353a42, roughness: 0.7 });
  const marbleMat = new THREE.MeshStandardMaterial({ color: 0x4a4e57, roughness: 0.45, metalness: 0.1 });

  // Colliders exposed to physics. Boxes are oriented (rotate about Y only);
  // cylinders are circles in XZ. main.js resolves the player sphere against
  // these exactly (circle-vs-OBB / circle-vs-circle).
  const boxes = [];      // { center:Vec3, halfExtents:{x,z}, rotationY }
  const cylinders = [];  // { center:Vec3, radius }
  const occluders = [];  // meshes for THREE.Raycaster line-of-sight tests

  // --- Floor ---
  const floor = new THREE.Mesh(new THREE.BoxGeometry(ROOM.x * 2 + 1, 0.4, ROOM.z * 2 + 1), floorMat);
  floor.position.y = -0.2;
  scene.add(floor);
  occluders.push(floor);

  // --- Walls (4, open ceiling) ---
  function wall(w, h, d, x, y, z) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat);
    m.position.set(x, y, z);
    scene.add(m);
    occluders.push(m);
    // Walls are axis-aligned boxes = OBB with rotationY 0 (unified path).
    boxes.push({
      center: new THREE.Vector3(x, y, z),
      halfExtents: { x: w / 2, z: d / 2 },
      rotationY: 0,
    });
    return m;
  }
  const hy = ROOM.wallH / 2;
  wall(ROOM.x * 2 + 1, ROOM.wallH, ROOM.t, 0, hy, -ROOM.z - 0.3);  // back (-z)
  wall(ROOM.x * 2 + 1, ROOM.wallH, ROOM.t, 0, hy, ROOM.z + 0.3);   // front (+z)
  wall(ROOM.t, ROOM.wallH, ROOM.z * 2 + 1, -ROOM.x - 0.3, hy, 0);  // left (-x)
  wall(ROOM.t, ROOM.wallH, ROOM.z * 2 + 1, ROOM.x + 0.3, hy, 0);   // right (+x)

  // --- Cover props: boxes (crates) + cylinders (pillars/statues) ---
  function box(w, h, d, x, z, mat = crateMat, rotY = 0) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, h / 2, z);
    m.rotation.y = rotY;
    scene.add(m);
    occluders.push(m);
    // Oriented collider: the solver rotates the player into local space, so the
    // true rotated faces are the collision surface (no world-AABB phantom box).
    boxes.push({
      center: new THREE.Vector3(x, h / 2, z),
      halfExtents: { x: w / 2, z: d / 2 },
      rotationY: rotY,
    });
    return m;
  }
  function pillar(r, h, x, z, mat = stoneMat) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 20), mat);
    m.position.set(x, h / 2, z);
    scene.add(m);
    occluders.push(m);
    // Cylinders collide as circles in XZ — exact, and rotation-invariant.
    cylinders.push({ center: new THREE.Vector3(x, h / 2, z), radius: r });
    return m;
  }
  function statue(x, z) {
    // Low pedestal + a taller "figure" cylinder on top.
    pillar(0.9, 1.0, x, z, stoneMat);
    const fig = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.5, 1.8, 16), marbleMat);
    fig.position.set(x, 1.9, z);
    scene.add(fig);
    occluders.push(fig);
    // The pedestal (r=0.9) is the collision footprint; the slimmer figure sits
    // inside it, so a single circle collider covers the whole statue.
    return fig;
  }

  // Layout: spawn is bottom-left (-x,+z), exit is top-right (+x,-z). Props form
  // a broken diagonal so there's an interesting risky path with cover pockets.
  box(2.2, 2.0, 2.2, -6.5, 3.6);
  // Spawn shield: a tall crate between the spawn corner and guard #3's orbit
  // arc, so an idle player at spawn is never in any patrol light's line of
  // sight (verified over the full patrol cycle — see main.js checkLitAt).
  box(2.6, 2.6, 2.0, -7.7, 4.8, crateMat, 0.05);
  box(1.6, 1.4, 3.0, -8.5, -1.5, crateMat, 0.3);
  box(2.6, 1.2, 1.6, -3.0, 5.0);
  box(1.8, 2.4, 1.8, -1.0, -0.5, crateMat, 0.6);
  // Obviously-rotated long crate on the main path (≈37°). Its footprint is very
  // non-square, so any world-AABB collision would block a large phantom wedge —
  // this is the crate to test circle-vs-OBB sliding against.
  box(3.4, 1.7, 1.2, 1.2, 1.3, crateMat, Math.PI / 4.9);
  box(3.0, 1.6, 1.4, 2.0, 3.5, crateMat, -0.2);
  box(2.0, 2.2, 2.0, 5.0, -1.0);
  box(1.4, 1.4, 2.4, 7.5, 2.5, crateMat, 0.4);
  box(2.4, 1.8, 1.6, 8.5, -4.5);
  pillar(0.7, 3.2, -4.5, -4.5);
  pillar(0.6, 2.6, 3.5, -4.5);
  pillar(0.7, 3.0, 9.5, 4.5);

  // Central statue that guard light #3 orbits.
  const centralStatue = statue(0.0, 1.5);

  // --- Spawn & exit ---
  const spawn = new THREE.Vector3(-10.5, 0.35, 6.0);
  const exit = new THREE.Vector3(10.0, 0.35, -6.0);

  // Exit beacon: glowing emissive disc set into the floor + a low pillar.
  const exitDisc = new THREE.Mesh(
    new THREE.CylinderGeometry(1.5, 1.5, 0.12, 40),
    new THREE.MeshStandardMaterial({
      color: 0x0a1a16, emissive: 0x39f0c0, emissiveIntensity: 2.4,
    })
  );
  exitDisc.position.set(exit.x, 0.06, exit.z);
  scene.add(exitDisc);

  const exitRing = new THREE.Mesh(
    new THREE.CylinderGeometry(0.55, 0.7, 1.1, 24),
    new THREE.MeshStandardMaterial({
      color: 0x0a1a16, emissive: 0x39f0c0, emissiveIntensity: 1.4,
    })
  );
  exitRing.position.set(exit.x, 0.55, exit.z);
  scene.add(exitRing);
  occluders.push(exitRing);
  const exitBeacon = { disc: exitDisc, ring: exitRing };

  // --- Lights ---
  // High fill so shadow areas are readable (not pitch black). Large rtRadius
  // keeps its shadows very soft — it reads as ambience, not a light pool.
  const fill = new THREE.PointLight(0xafc4e0, 4.5, 60);
  fill.position.set(0, 9, 0);
  fill.userData.rtRadius = 0.9;
  scene.add(fill);

  // Two faint cool fills over opposite corners so every patrol phase leaves
  // the room layout discernible without washing out the guard-light pools.
  const ambientKey = new THREE.PointLight(0x8098c0, 2.4, 50);
  ambientKey.position.set(-8, 8, 6);
  ambientKey.userData.rtRadius = 0.8;
  scene.add(ambientKey);

  const ambientKey2 = new THREE.PointLight(0x8098c0, 2.0, 50);
  ambientKey2.position.set(8, 8, -6);
  ambientKey2.userData.rtRadius = 0.8;
  scene.add(ambientKey2);

  // Three patrolling guard lights (two warm, one magenta for variety). Each
  // gets a small glowing fixture orb so players can SEE the light source they
  // are dodging. The fixture uses userData.rtExclude so it rasterizes (visible,
  // glowing) but stays OUT of the BVH — a mesh at the light's exact position
  // would otherwise occlude the light's own shadow rays and kill its
  // illumination. rtExclude meshes cost nothing to move (the G-buffer
  // re-rasterizes every frame anyway).
  function guardLight(color, intensity) {
    const l = new THREE.PointLight(color, intensity, 22);
    l.position.y = 3.5;
    l.userData.rtRadius = 0.3;
    scene.add(l);
    const fixture = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 16, 12),
      new THREE.MeshStandardMaterial({
        color: 0x000000, emissive: color, emissiveIntensity: 5,
      })
    );
    fixture.userData.rtExclude = true;
    scene.add(fixture);
    return { l, fixture };
  }

  const warm = 0xffd39a;
  const magenta = 0xff4fb0;
  const { l: g1, fixture: f1 } = guardLight(warm, 26);    // sweeping arc
  const { l: g2, fixture: f2 } = guardLight(warm, 26);    // ping-pong line
  const { l: g3, fixture: f3 } = guardLight(magenta, 26); // orbit central statue

  // Patrol speeds tuned for a first-time player: slow enough to read and
  // predict, fast enough to force timing. `range` is the detection range.
  const guards = [
    {
      light: g1, fixture: f1,
      range: 8,
      patrol(t) {
        const a = -0.9 + Math.sin(t * 0.3) * 1.15; // sweeping arc
        const r = 7.5;
        g1.position.set(-3.5 + Math.cos(a) * r, 3.6, Math.sin(a) * r * 0.7);
        f1.position.copy(g1.position);
      },
    },
    {
      light: g2, fixture: f2,
      range: 8,
      patrol(t) {
        const s = Math.sin(t * 0.38); // ping-pong along the right side
        g2.position.set(6.5, 3.5, s * 6.0);
        f2.position.copy(g2.position);
      },
    },
    {
      light: g3, fixture: f3,
      range: 8,
      patrol(t) {
        const a = t * 0.42; // orbit the central statue
        g3.position.set(Math.cos(a) * 4.5, 3.4, 1.5 + Math.sin(a) * 4.5);
        f3.position.copy(g3.position);
      },
    },
  ];
  // Initialise positions at t=0.
  guards.forEach((g) => g.patrol(0));

  const lights = [fill, ambientKey, ambientKey2, g1, g2, g3];

  return {
    scene, camera, ROOM,
    spawn, exit,
    occluders, boxes, cylinders,
    guards, fill, ambientKey, lights,
    exitBeacon, centralStatue,
  };
}
