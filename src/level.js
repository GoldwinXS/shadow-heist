import * as THREE from "three";

/**
 * Builds the museum vault: a dark rectangular room (open ceiling), scattered
 * crates / pillars / statues for cover, a dim fill light, three patrolling
 * guard lights, and the glowing exit pad.
 *
 * Returns everything the game loop needs:
 *   scene, camera, spawn, exit, occluders[], guards[], fill, exitBeacon,
 *   walls (AABB colliders), crates (AABB colliders)
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

  // Colliders exposed to physics + detection raycasts.
  const walls = [];   // { min:Vec3, max:Vec3 }
  const crates = [];  // { min:Vec3, max:Vec3 }
  const occluders = []; // meshes for THREE.Raycaster line-of-sight tests

  const addAABB = (arr, mesh) => {
    mesh.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(mesh);
    arr.push({ min: box.min.clone(), max: box.max.clone() });
  };

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
    addAABB(walls, m);
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
    addAABB(crates, m);
    return m;
  }
  function pillar(r, h, x, z, mat = stoneMat) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 20), mat);
    m.position.set(x, h / 2, z);
    scene.add(m);
    occluders.push(m);
    // Approximate the cylinder with its bounding box for collision.
    const min = new THREE.Vector3(x - r, 0, z - r);
    const max = new THREE.Vector3(x + r, h, z + r);
    crates.push({ min, max });
    return m;
  }
  function statue(x, z) {
    // Low pedestal + a taller "figure" cylinder on top.
    pillar(0.9, 1.0, x, z, stoneMat);
    const fig = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.5, 1.8, 16), marbleMat);
    fig.position.set(x, 1.9, z);
    scene.add(fig);
    occluders.push(fig);
    const min = new THREE.Vector3(x - 0.5, 0, z - 0.5);
    const max = new THREE.Vector3(x + 0.5, 2.8, z + 0.5);
    crates.push({ min, max });
    return fig;
  }

  // Layout: spawn is bottom-left (-x,+z), exit is top-right (+x,-z). Props form
  // a broken diagonal so there's an interesting risky path with cover pockets.
  box(2.2, 2.0, 2.2, -6.5, 3.6);
  box(1.6, 1.4, 3.0, -8.5, -1.5, crateMat, 0.3);
  box(2.6, 1.2, 1.6, -3.0, 5.0);
  box(1.8, 2.4, 1.8, -1.0, -0.5, crateMat, 0.6);
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
  // Dim high fill so shadow areas are readable (not pitch black).
  const fill = new THREE.PointLight(0xafc4e0, 2.2, 60);
  fill.position.set(0, 9, 0);
  fill.userData.rtRadius = 0.5;
  scene.add(fill);

  // A faint cool key from above the far corner keeps the room from being flat.
  const ambientKey = new THREE.PointLight(0x8098c0, 1.4, 50);
  ambientKey.position.set(-8, 8, 6);
  ambientKey.userData.rtRadius = 0.6;
  scene.add(ambientKey);

  // Three warm patrolling guard lights. `patrol` is called each frame with
  // elapsed time to reposition them. range is the detection range.
  const guardColor = 0xffd39a;
  function guardLight() {
    const l = new THREE.PointLight(guardColor, 26, 22);
    l.position.y = 3.5;
    l.userData.rtRadius = 0.3;
    scene.add(l);
    return l;
  }

  const g1 = guardLight(); // sweeping circular arc (left/centre)
  const g2 = guardLight(); // ping-pong along a line (right)
  const g3 = guardLight(); // orbit central statue

  const guards = [
    {
      light: g1,
      range: 9,
      patrol(t) {
        const a = -0.9 + Math.sin(t * 0.45) * 1.15; // sweeping arc
        const r = 7.5;
        g1.position.set(-3.5 + Math.cos(a) * r, 3.6, Math.sin(a) * r * 0.7);
      },
    },
    {
      light: g2,
      range: 9,
      patrol(t) {
        const s = Math.sin(t * 0.55); // ping-pong along +x/-z diagonal-ish line
        g2.position.set(6.5, 3.5, s * 6.0);
      },
    },
    {
      light: g3,
      range: 8.5,
      patrol(t) {
        const a = t * 0.6; // orbit the central statue
        g3.position.set(Math.cos(a) * 4.5, 3.4, 1.5 + Math.sin(a) * 4.5);
      },
    },
  ];
  // Initialise positions at t=0.
  guards.forEach((g) => g.patrol(0));

  const lights = [fill, ambientKey, g1, g2, g3];

  return {
    scene, camera, ROOM,
    spawn, exit,
    occluders, walls, crates,
    guards, fill, ambientKey, lights,
    exitBeacon, centralStatue,
  };
}
