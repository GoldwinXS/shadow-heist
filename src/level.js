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
  // Back (-z) wall is now a DOORWAY to the bridge: instead of one solid wall we
  // build two segments leaving a gap (width DOOR_W, centred at DOOR_CX — the old
  // exit corner) that funnels the player onto the bridge. The gap is aligned
  // with the bridge deck + kerbs built later so the transition is seamless.
  const DOOR_CX = 10, DOOR_W = 3.6;                 // gap x ∈ [8.2, 11.8]
  const backZ = -ROOM.z - 0.3;                      // -8.3
  const bwHalf = (ROOM.x * 2 + 1) / 2;              // 12.5 (half the back wall span)
  const gapL = DOOR_CX - DOOR_W / 2;                // 8.2
  const gapR = DOOR_CX + DOOR_W / 2;                // 11.8
  wall(gapL + bwHalf, ROOM.wallH, ROOM.t, (-bwHalf + gapL) / 2, hy, backZ); // back-left seg
  wall(bwHalf - gapR, ROOM.wallH, ROOM.t, (gapR + bwHalf) / 2, hy, backZ);  // back-right seg
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

  // Three patrolling guard lights (two warm, one magenta for variety). Now
  // THREE.SpotLights — the ray tracer casts real cones (penumbra + soft shadows)
  // and, with volumetric fog on, each cone becomes a VISIBLE sweeping beam.
  //
  // Each spot needs its `target` in the scene graph so the compiler can read the
  // target's world position (the cone axis = normalize(target - light)); the
  // patrol() functions re-aim the target every frame so the beam sweeps.
  //
  // Each light also gets a small glowing fixture orb so players can SEE the
  // source they are dodging. The fixture uses userData.rtExclude so it rasterizes
  // (visible, glowing) but stays OUT of the BVH — a mesh at the light's exact
  // position would otherwise occlude the light's own shadow rays and kill its
  // illumination. rtExclude meshes cost nothing to move (the G-buffer
  // re-rasterizes every frame anyway).
  function guardLight(color, intensity) {
    // SpotLight(color, intensity, distance, angle, penumbra)
    const l = new THREE.SpotLight(color, intensity, 22, 0.45, 0.3);
    l.position.y = 3.5;
    l.userData.rtRadius = 0.15;
    scene.add(l);
    scene.add(l.target); // target must be in the scene so its world matrix updates
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

  // Aim a guard spotlight: place it at (x,y,z) and point its cone along the
  // horizontal patrol direction (fx,fz), angled down at the floor a few units
  // ahead — so the beam leads the sweep. Falls back to straight-down when the
  // guard is momentarily near-stationary. The fixture rides the light.
  const AIM_LEAD = 3.0; // how far ahead of the light the cone hits the floor
  function aimGuard(light, fixture, x, y, z, fx, fz) {
    light.position.set(x, y, z);
    fixture.position.set(x, y, z);
    const len = Math.hypot(fx, fz);
    if (len > 1e-4) { fx /= len; fz /= len; } else { fx = 0; fz = 0; }
    // Target on the floor (y≈0), AIM_LEAD ahead → cone points down-and-forward.
    light.target.position.set(x + fx * AIM_LEAD, 0.0, z + fz * AIM_LEAD);
  }

  // Patrol speeds tuned for a first-time player: slow enough to read and
  // predict, fast enough to force timing. `range` is the detection range.
  // Each patrol samples its path at t and t+dt to get the sweep direction it
  // aims the cone along.
  const DT = 0.05;
  const guards = [
    {
      light: g1, fixture: f1,
      range: 8,
      patrol(t) {
        // sweeping arc
        const at = (tt) => -0.9 + Math.sin(tt * 0.3) * 1.15;
        const r = 7.5;
        const pos = (tt) => { const a = at(tt); return [-3.5 + Math.cos(a) * r, Math.sin(a) * r * 0.7]; };
        const [x, z] = pos(t), [x2, z2] = pos(t + DT);
        aimGuard(g1, f1, x, 3.6, z, x2 - x, z2 - z);
      },
    },
    {
      light: g2, fixture: f2,
      range: 8,
      patrol(t) {
        // ping-pong along the right side
        const pos = (tt) => [6.5, Math.sin(tt * 0.38) * 6.0];
        const [x, z] = pos(t), [x2, z2] = pos(t + DT);
        aimGuard(g2, f2, x, 3.5, z, x2 - x, z2 - z);
      },
    },
    {
      light: g3, fixture: f3,
      range: 8,
      patrol(t) {
        // orbit the central statue
        const pos = (tt) => { const a = tt * 0.42; return [Math.cos(a) * 4.5, 1.5 + Math.sin(a) * 4.5]; };
        const [x, z] = pos(t), [x2, z2] = pos(t + DT);
        aimGuard(g3, f3, x, 3.4, z, x2 - x, z2 - z);
      },
    },
  ];
  // Initialise positions at t=0.
  guards.forEach((g) => g.patrol(0));

  // ===================================================================
  // ACT 2 — THE BRIDGE (set piece). A narrow stone bridge crossing an
  // abyss: there is NO floor on either side (the outer floor simply does
  // not exist below the deck), only low kerbs so the player cannot roll
  // off. Warm candle PointLights line both edges — flickered per-frame in
  // main.js — over ~0.02-density fog (a per-zone volumetric, wired in
  // main.js). The deck runs from the act-1 doorway (backZ) toward -Z.
  // ===================================================================
  const BRIDGE_LEN = 26;
  const BRIDGE_Z0 = backZ;                          // -8.3, at the doorway
  const BRIDGE_Z1 = backZ - BRIDGE_LEN;             // -34.3, at act 3
  const BRIDGE_MIDZ = (BRIDGE_Z0 + BRIDGE_Z1) / 2;  // -21.3
  const DECK_W = 3.6;                               // full deck width (matches doorway)

  // Deck: a thin floating slab. Occluder + walkable floor only — NOT a collider
  // box (the player walks on TOP; kerbs provide the collision walls).
  const bridgeDeck = new THREE.Mesh(new THREE.BoxGeometry(DECK_W, 0.4, BRIDGE_LEN), stoneMat);
  bridgeDeck.position.set(DOOR_CX, -0.2, BRIDGE_MIDZ);
  scene.add(bridgeDeck);
  occluders.push(bridgeDeck);

  // Side kerbs: low lips at the deck edges. Colliders (in `boxes`) so the player
  // is confined to the deck, and occluders so detection raycasts see them too.
  function kerb(x) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.6, BRIDGE_LEN), stoneMat);
    m.position.set(x, 0.3, BRIDGE_MIDZ);
    scene.add(m);
    occluders.push(m);
    boxes.push({ center: new THREE.Vector3(x, 0.3, BRIDGE_MIDZ), halfExtents: { x: 0.175, z: BRIDGE_LEN / 2 }, rotationY: 0 });
  }
  kerb(DOOR_CX - DECK_W / 2); // left edge  (x = 8.2)
  kerb(DOOR_CX + DECK_W / 2); // right edge (x = 11.8)

  // Candle flames: warm PointLights lining both edges, staggered left/right every
  // ~3.5 units. Each has a tiny emissive marker mesh (rtExclude → rasterized/
  // glowing but OUT of the BVH, like the guard fixtures). main.js flickers the
  // light intensities each frame; the existing per-frame rt.updateLights() picks
  // them up. NOTE: the library caps total lights at MAX_LIGHTS = 16 (excess are
  // silently dropped, later-added first). Budget here: 3 fills + 3 act-1 guards +
  // 2 act-3 guards + 7 candles = 15, leaving room for main.js's moon = 16 exactly.
  // Denser candles would need a higher MAX_LIGHTS, so they are staggered, not
  // doubled per rung, to line both edges within budget.
  const candles = [];
  const CANDLE_BASE = 3;
  function candle(x, z) {
    const l = new THREE.PointLight(0xffb36b, CANDLE_BASE, 6);
    l.position.set(x, 0.85, z);
    l.userData.rtRadius = 0.06;
    scene.add(l);
    const flame = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.09, 0.28, 8),
      new THREE.MeshStandardMaterial({ color: 0x140a02, emissive: 0xffb060, emissiveIntensity: 6 })
    );
    flame.position.set(x, 0.55, z);
    flame.userData.rtExclude = true; // rasterize-only; never occludes its own light
    scene.add(flame);
    candles.push({ light: l, base: CANDLE_BASE, marker: flame });
  }
  const CANDLE_XL = DOOR_CX - DECK_W / 2 + 0.35; // just inside the left kerb  (8.55)
  const CANDLE_XR = DOOR_CX + DECK_W / 2 - 0.35; // just inside the right kerb (11.45)
  [-10.5, -14, -17.5, -21, -24.5, -28, -31.5].forEach((z, i) => {
    candle(i % 2 === 0 ? CANDLE_XL : CANDLE_XR, z); // alternate edges (staggered)
  });

  // ===================================================================
  // ACT 3 — second challenge room (same mechanics as act 1). Reuses the
  // wall()/box()/pillar()/guardLight()/aimGuard() helpers. Layout: a central
  // block splits the entrance into two cover LANES; a diagonal crate line
  // crosses the middle; the FINAL exit (real win trigger) sits at the far end.
  // Room interior x ∈ [0, 20], z ∈ [-52.3, -34.3], centred at (10, -43.3).
  // ===================================================================
  const A3_CX = DOOR_CX;                 // room centre x = 10 (aligned with bridge)
  const A3_Z0 = BRIDGE_Z1;               // -34.3, front wall (bridge side)
  const A3_DEPTH = 18;
  const A3_Z1 = A3_Z0 - A3_DEPTH;        // -52.3, back wall
  const A3_MIDZ = (A3_Z0 + A3_Z1) / 2;   // -43.3
  const A3_HALF = 10.5;                  // half interior width (+ wall thickness margin)

  // Floor slab.
  const a3floor = new THREE.Mesh(new THREE.BoxGeometry(A3_HALF * 2, 0.4, A3_DEPTH + 0.4), floorMat);
  a3floor.position.set(A3_CX, -0.2, A3_MIDZ);
  scene.add(a3floor);
  occluders.push(a3floor);

  // Walls (open ceiling). Front wall is split around the bridge doorway.
  const a3y = ROOM.wallH / 2;
  const a3gapL = A3_CX - DOOR_W / 2, a3gapR = A3_CX + DOOR_W / 2;
  wall((a3gapL) - (A3_CX - A3_HALF), ROOM.wallH, ROOM.t, ((A3_CX - A3_HALF) + a3gapL) / 2, a3y, A3_Z0); // front-left
  wall((A3_CX + A3_HALF) - a3gapR, ROOM.wallH, ROOM.t, (a3gapR + (A3_CX + A3_HALF)) / 2, a3y, A3_Z0);   // front-right
  wall(A3_HALF * 2, ROOM.wallH, ROOM.t, A3_CX, a3y, A3_Z1);                    // back (-z)
  wall(ROOM.t, ROOM.wallH, A3_DEPTH, A3_CX - A3_HALF, a3y, A3_MIDZ);           // left (-x)
  wall(ROOM.t, ROOM.wallH, A3_DEPTH, A3_CX + A3_HALF, a3y, A3_MIDZ);           // right (+x)

  // Cover: central splitter + two lane crates + a diagonal line + a pillar.
  box(2.6, 2.0, 2.2, A3_CX, -38.5);                          // central block (splits into two lanes)
  box(3.0, 1.6, 1.2, 6.5, -40.0, crateMat, Math.PI / 4.5);   // diagonal crate (left→mid)
  box(3.0, 1.6, 1.2, 13.5, -46.0, crateMat, Math.PI / 4.5);  // diagonal crate (mid→right)
  box(2.0, 1.8, 2.0, 3.5, -44.0, crateMat, 0.2);             // left lane cover
  box(1.8, 2.2, 1.8, 5.0, -48.5);                            // left lane cover (deep)
  box(2.0, 1.8, 2.0, 16.5, -44.0, crateMat, -0.2);           // right lane cover
  box(1.8, 2.2, 1.8, 15.0, -48.5);                           // right lane cover (deep)
  pillar(0.7, 3.0, A3_CX, -45.0);                            // central pillar guarding the exit run

  // Two patrolling guard lights (reuse the act-1 helpers exactly).
  const { l: gA, fixture: fA } = guardLight(warm, 26);    // sweeps across the room width
  const { l: gB, fixture: fB } = guardLight(magenta, 26); // orbits the exit approach
  const act3Guards = [
    {
      light: gA, fixture: fA, range: 8,
      patrol(t) {
        const pos = (tt) => [A3_CX + Math.sin(tt * 0.5) * 6.5, -41.0];
        const [x, z] = pos(t), [x2, z2] = pos(t + DT);
        aimGuard(gA, fA, x, 3.5, z, x2 - x, z2 - z);
      },
    },
    {
      light: gB, fixture: fB, range: 8,
      patrol(t) {
        const pos = (tt) => { const a = tt * 0.5; return [A3_CX + Math.cos(a) * 4.5, -47.0 + Math.sin(a) * 3.5]; };
        const [x, z] = pos(t), [x2, z2] = pos(t + DT);
        aimGuard(gB, fB, x, 3.4, z, x2 - x, z2 - z);
      },
    },
  ];
  act3Guards.forEach((g) => { guards.push(g); g.patrol(0); });

  // Final exit beacon (the real win trigger) at the far end of act 3.
  const finalExit = new THREE.Vector3(A3_CX, 0.35, -50.0);
  const finalDisc = new THREE.Mesh(
    new THREE.CylinderGeometry(1.5, 1.5, 0.12, 40),
    new THREE.MeshStandardMaterial({ color: 0x0a1a16, emissive: 0x39f0c0, emissiveIntensity: 2.4 })
  );
  finalDisc.position.set(finalExit.x, 0.06, finalExit.z);
  scene.add(finalDisc);
  const finalRing = new THREE.Mesh(
    new THREE.CylinderGeometry(0.55, 0.7, 1.1, 24),
    new THREE.MeshStandardMaterial({ color: 0x0a1a16, emissive: 0x39f0c0, emissiveIntensity: 1.4 })
  );
  finalRing.position.set(finalExit.x, 0.55, finalExit.z);
  scene.add(finalRing);
  occluders.push(finalRing);
  const finalBeacon = { disc: finalDisc, ring: finalRing };

  // --- Checkpoints (respawn points) & fog zones exported for main.js ---
  const checkpoints = {
    act1Spawn: spawn.clone(),                        // act 1 start
    bridgeStart: new THREE.Vector3(DOOR_CX, 0.35, BRIDGE_Z0 - 1.2), // just onto the bridge (~ -9.5)
    act3Start: new THREE.Vector3(A3_CX, 0.35, A3_Z0 - 1.2),         // just into act 3 (~ -35.5)
  };
  // AABBs for the volumetric fog zones (library >= fog-zones build). density is
  // the suggested per-zone value; main.js composes rt.volumetric.zones from these.
  const bridgeZone = { min: [gapL - 0.7, -2, BRIDGE_Z1 - 0.2], max: [gapR + 0.7, 5, BRIDGE_Z0 + 0.3], density: 0.02 };
  const act3Zone = { min: [A3_CX - A3_HALF, -1, A3_Z1 - 0.2], max: [A3_CX + A3_HALF, 4, A3_Z0 + 0.2], density: 0.004 };

  const lights = [fill, ambientKey, ambientKey2, g1, g2, g3, gA, gB, ...candles.map((c) => c.light)];

  return {
    scene, camera, ROOM,
    spawn, exit, finalExit,
    occluders, boxes, cylinders,
    guards, fill, ambientKey, lights,
    exitBeacon, finalBeacon, centralStatue,
    candles, checkpoints, bridgeZone, act3Zone,
    // Plane markers main.js uses for checkpoint/stage advancement.
    doorwayZ: backZ, bridgeMidZ: BRIDGE_MIDZ,
  };
}
