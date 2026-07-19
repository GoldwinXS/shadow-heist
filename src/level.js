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

  // --- Spawn ---
  // Act 1 has NO exit beacon any more: the only cue out of the vault is the
  // doorway gap in the back wall (x ∈ [8.2, 11.8]) that funnels onto the bridge.
  // The single win-trigger beacon lives at the very end of the level (act 4).
  const spawn = new THREE.Vector3(-10.5, 0.35, 6.0);

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

  // ---- THE DROP-OFF: vertical chasm flanking the bridge -----------------
  // The bridge floats over a black hole. We build two tall cliff faces well
  // outside the deck (x ≈ 4 and x ≈ 16) descending y: 0 → -22, plus end walls,
  // and line their INNER faces with rows of tiny EMISSIVE STUDS that fade with
  // depth (bright near the deck, embers far below, pure black beneath). The
  // studs are STATIC, non-rtExclude meshes so the library's emissive NEE samples
  // them as area lights — they light the cliffs for FREE (zero light slots). We
  // use 2-triangle quads (not boxes) and keep the beacon low-poly so the whole
  // scene stays under the 256-emissive-triangle NEE cap (largest-area-wins), i.e.
  // none of the studs are dropped.
  const chasmMat = new THREE.MeshStandardMaterial({ color: 0x14171d, roughness: 0.95 });
  const CHASM_X = { L: 4, R: 16 };        // cliff centre-lines (deck edges are 8.2 / 11.8)
  const CHASM_TOP = 0, CHASM_BOT = -22, CHASM_H = CHASM_TOP - CHASM_BOT; // 22
  const CHASM_CY = (CHASM_TOP + CHASM_BOT) / 2;                          // -11
  function chasmWall(w, d, x, z) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, CHASM_H, d), chasmMat);
    m.position.set(x, CHASM_CY, z);
    scene.add(m);
    occluders.push(m); // occludes downward so the void below the studs reads black
  }
  // Left & right cliff faces (span the bridge length, thickness 1.2 outward).
  chasmWall(1.2, BRIDGE_LEN + 1.0, CHASM_X.L, BRIDGE_MIDZ);
  chasmWall(1.2, BRIDGE_LEN + 1.0, CHASM_X.R, BRIDGE_MIDZ);
  // End walls close the chasm at the doorway end and the act-2 end.
  chasmWall(CHASM_X.R - CHASM_X.L + 1.2, 1.2, (CHASM_X.L + CHASM_X.R) / 2, BRIDGE_Z0 - 0.5);
  chasmWall(CHASM_X.R - CHASM_X.L + 1.2, 1.2, (CHASM_X.L + CHASM_X.R) / 2, BRIDGE_Z1 + 0.5);

  // Emissive studs: small quads on the inner cliff faces, in a z×y grid, with
  // emissiveIntensity ramping from bright (top) to ember (bottom). Facing the
  // deck (+X on the left cliff, −X on the right). DoubleSide so the glow reads
  // from grazing angles too.
  const studs = [];
  const STUD_S = 0.34;                              // quad size
  const studGeo = new THREE.PlaneGeometry(STUD_S, STUD_S);
  const STUD_ZCOLS = [-12, -18, -24, -30];         // 4 columns down the bridge
  const STUD_YROWS = [-2, -6, -10, -14, -18];      // 5 rows descending
  function stud(x, y, z, faceX, t) {
    // t ∈ [0,1]: 0 = top (bright), 1 = bottom (ember). Colour warms→deep-orange,
    // intensity falls off with depth so the bottom rows are dim embers.
    const inten = 9.0 * Math.pow(1 - t, 1.5) + 0.7;
    const col = new THREE.Color().setHSL(0.075 - 0.02 * t, 0.95, 0.5 - 0.12 * t);
    const m = new THREE.Mesh(
      studGeo,
      new THREE.MeshStandardMaterial({
        color: 0x000000, emissive: col, emissiveIntensity: inten, side: THREE.DoubleSide,
      })
    );
    m.position.set(x, y, z);
    m.rotation.y = faceX > 0 ? Math.PI / 2 : -Math.PI / 2; // face toward the deck
    scene.add(m);
    studs.push(m);
  }
  const YMIN = STUD_YROWS[0], YMAX = STUD_YROWS[STUD_YROWS.length - 1];
  for (const z of STUD_ZCOLS) {
    for (const y of STUD_YROWS) {
      const t = (y - YMIN) / (YMAX - YMIN); // 0 at top row, 1 at bottom row
      stud(CHASM_X.L + 0.62, y, z, +1, t); // left cliff, face +X
      stud(CHASM_X.R - 0.62, y, z, -1, t); // right cliff, face −X
    }
  } // 4 cols × 5 rows × 2 cliffs = 40 studs (80 emissive tris)

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
  // Back wall is now a DOORWAY to the mirror gallery (set piece B): split into
  // two segments leaving the same 3.6-wide gap (x ∈ [8.2, 11.8]) centred on the
  // spine. (This wall is also the gallery's front wall — built once here.)
  wall((a3gapL) - (A3_CX - A3_HALF), ROOM.wallH, ROOM.t, ((A3_CX - A3_HALF) + a3gapL) / 2, a3y, A3_Z1); // back-left
  wall((A3_CX + A3_HALF) - a3gapR, ROOM.wallH, ROOM.t, (a3gapR + (A3_CX + A3_HALF)) / 2, a3y, A3_Z1);   // back-right
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

  // Warm fill for the patrol room. The cold moon (main.js) is partially shadowed
  // here by the act-1 structures up the spine, leaving this room too dim; a soft
  // warm point over its centre restores readability without drowning the guard
  // cones. Large rtRadius → very soft, reads as ambience.
  const a3Fill = new THREE.PointLight(0xf0c48a, 3.4, 46);
  a3Fill.position.set(A3_CX, 8, A3_MIDZ);
  a3Fill.userData.rtRadius = 0.85;
  scene.add(a3Fill);

  // NOTE: the final win-trigger beacon that used to sit here has MOVED to the
  // new final vault (act 4) far down the spine — see the extension block below.

  // ===================================================================
  // THE SPINE CONTINUES. Everything below extends the level down -Z into a
  // gauntlet of alternating SET PIECES (spectacle, no guards) and CHALLENGE
  // rooms (guards), each showing off a different renderer feature:
  //   B  mirror gallery   — traced metallic reflections
  //   3  fog banks        — volumetric zones AS a stealth mechanic (concealment)
  //   C  god-ray hall     — slitted light + fog → volumetric shafts
  //   4  final vault      — the hardest room, the ONLY win beacon
  // Boundary walls between rooms are built ONCE (at the wider room's width) with
  // the same 3.6-wide central doorway gap, so the spine reads as one corridor.
  // ===================================================================
  const GAP_L = A3_CX - DOOR_W / 2, GAP_R = A3_CX + DOOR_W / 2; // 8.2 .. 11.8
  // Build the two segments of a doorway wall at plane z, for a room half-width h.
  function doorwayWall(z, h) {
    wall((GAP_L) - (A3_CX - h), ROOM.wallH, ROOM.t, ((A3_CX - h) + GAP_L) / 2, hy, z); // left seg
    wall((A3_CX + h) - GAP_R, ROOM.wallH, ROOM.t, (GAP_R + (A3_CX + h)) / 2, hy, z);    // right seg
  }
  function roomFloor(cx, midz, halfW, depth) {
    const f = new THREE.Mesh(new THREE.BoxGeometry(halfW * 2, 0.4, depth + 0.4), floorMat);
    f.position.set(cx, -0.2, midz);
    scene.add(f);
    occluders.push(f);
  }

  // ---- SET PIECE B — MIRROR GALLERY --------------------------------------
  // A narrow corridor with a POLISHED metallic floor strip and angled metallic
  // wall panels. The tracer's real reflections double the candles / accent
  // lights / emissive trim in the floor. No guards.
  const GAL_Z0 = A3_Z1;                    // -52.3 (patrol back wall = gallery front)
  const GAL_DEPTH = 10, GAL_Z1 = GAL_Z0 - GAL_DEPTH; // -62.3
  const GAL_MIDZ = (GAL_Z0 + GAL_Z1) / 2;  // -57.3
  const GAL_HALF = 5;                      // x ∈ [5, 15]
  roomFloor(A3_CX, GAL_MIDZ, GAL_HALF, GAL_DEPTH);
  wall(ROOM.t, ROOM.wallH, GAL_DEPTH, A3_CX - GAL_HALF, hy, GAL_MIDZ); // left  x=5
  wall(ROOM.t, ROOM.wallH, GAL_DEPTH, A3_CX + GAL_HALF, hy, GAL_MIDZ); // right x=15
  // (gallery front wall = patrol back doorway, already built; gallery back wall
  //  is the fog room front doorway, built below at the wider fog width.)

  const mirrorMat = new THREE.MeshStandardMaterial({ color: 0x9aa4b0, roughness: 0.08, metalness: 0.95 });
  // Polished floor strip (reflective). Flat → occluder only, not a collider.
  const galStrip = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.06, GAL_DEPTH - 1.2), mirrorMat);
  galStrip.position.set(A3_CX, 0.04, GAL_MIDZ);
  scene.add(galStrip);
  occluders.push(galStrip);
  // Angled metallic wall panels catch and bounce the accent lights. Slightly
  // tilted, flush to the side walls; occluders only (they don't pinch the path).
  function panel(x, z, rotY, w, h) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.12), mirrorMat);
    m.position.set(x, h / 2 + 0.2, z);
    m.rotation.y = rotY;
    scene.add(m);
    occluders.push(m);
  }
  panel(A3_CX - GAL_HALF + 0.3, GAL_MIDZ - 2.4, 0.18, 3.4, 3.0);
  panel(A3_CX - GAL_HALF + 0.3, GAL_MIDZ + 2.4, -0.18, 3.4, 3.0);
  panel(A3_CX + GAL_HALF - 0.3, GAL_MIDZ, 0.0, 3.6, 3.0);
  // Emissive trim strips along the walls (free NEE area lights) — reflected in
  // the floor strip. Thin DoubleSide quads, one teal, one amber.
  function trim(x, z, faceX, color) {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(GAL_DEPTH - 1.5, 0.14),
      new THREE.MeshStandardMaterial({ color: 0x000000, emissive: color, emissiveIntensity: 4.0, side: THREE.DoubleSide })
    );
    m.position.set(x, 0.55, z);
    m.rotation.y = faceX > 0 ? Math.PI / 2 : -Math.PI / 2;
    scene.add(m);
  }
  trim(A3_CX - GAL_HALF + 0.12, GAL_MIDZ, +1, 0x33e0d0); // left wall, teal
  trim(A3_CX + GAL_HALF - 0.12, GAL_MIDZ, -1, 0xffb060); // right wall, amber
  // Two accent point lights (one warm, one teal) light the gallery + feed the
  // reflections. Soft, small.
  const galAccent1 = new THREE.PointLight(0xffd0a0, 11, 22);
  galAccent1.position.set(A3_CX - 2.2, 3.4, GAL_MIDZ - 2.5);
  galAccent1.userData.rtRadius = 0.25;
  scene.add(galAccent1);
  const galAccent2 = new THREE.PointLight(0x8fe0e0, 9.5, 22);
  galAccent2.position.set(A3_CX + 2.2, 3.4, GAL_MIDZ + 2.5);
  galAccent2.userData.rtRadius = 0.25;
  scene.add(galAccent2);

  // ---- ACT 3 — THE FOG BANKS (mechanic room) -----------------------------
  // 3 DENSE, sharply-bounded fog banks are stepping-stone SAFE ZONES: while the
  // player is inside a bank AABB they are CONCEALED (main.js skips detection).
  // Two guard spotlights sweep the open floor BETWEEN the banks. The AABBs are
  // exported (fogBanks) and used for BOTH the volumetric zones and concealment.
  const FOG_Z0 = GAL_Z1;                    // -62.3
  const FOG_DEPTH = 18, FOG_Z1 = FOG_Z0 - FOG_DEPTH; // -80.3
  const FOG_MIDZ = (FOG_Z0 + FOG_Z1) / 2;   // -71.3
  const FOG_HALF = A3_HALF;                  // 10.5 (x ∈ [-0.5, 20.5])
  roomFloor(A3_CX, FOG_MIDZ, FOG_HALF, FOG_DEPTH);
  doorwayWall(FOG_Z0, FOG_HALF);            // front (= gallery back), at fog width
  wall(ROOM.t, ROOM.wallH, FOG_DEPTH, A3_CX - FOG_HALF, hy, FOG_MIDZ); // left
  wall(ROOM.t, ROOM.wallH, FOG_DEPTH, A3_CX + FOG_HALF, hy, FOG_MIDZ); // right

  const FOG_BANK_DENSITY = 0.06;
  // AABBs: [minX,minY,minZ] .. [maxX,maxY,maxZ]. y spans -1..3 (covers the orb).
  const fogBanks = [
    { min: [8, -1, -66], max: [12, 3, -63] },  // bank 1 — centred on the spine
    { min: [3, -1, -72], max: [7, 3, -69] },   // bank 2 — offset LEFT (forces a dodge)
    { min: [8, -1, -78], max: [12, 3, -75] },  // bank 3 — back on the spine
  ];
  // Cool floor pads mark each safe zone (non-emissive → free of the NEE cap).
  const padMat = new THREE.MeshStandardMaterial({ color: 0x14303a, roughness: 0.8, metalness: 0.0 });
  for (const b of fogBanks) {
    const w = b.max[0] - b.min[0], d = b.max[2] - b.min[2];
    const pad = new THREE.Mesh(new THREE.BoxGeometry(w, 0.05, d), padMat);
    pad.position.set((b.min[0] + b.max[0]) / 2, 0.03, (b.min[2] + b.max[2]) / 2);
    scene.add(pad);
    occluders.push(pad);
  }
  // Two sweeping guard spotlights in the gaps between the banks.
  const { l: fg1, fixture: ff1 } = guardLight(warm, 26);
  const { l: fg2, fixture: ff2 } = guardLight(magenta, 26);
  const fogGuards = [
    {
      light: fg1, fixture: ff1, range: 8,
      patrol(t) {
        const pos = (tt) => [A3_CX + Math.sin(tt * 0.5) * 8.5, -67.5];       // band between banks 1 & 2
        const [x, z] = pos(t), [x2, z2] = pos(t + DT);
        aimGuard(fg1, ff1, x, 3.6, z, x2 - x, z2 - z);
      },
    },
    {
      light: fg2, fixture: ff2, range: 8,
      patrol(t) {
        const pos = (tt) => [A3_CX + Math.sin(tt * 0.5 + 1.3) * 8.5, -73.5]; // band between banks 2 & 3
        const [x, z] = pos(t), [x2, z2] = pos(t + DT);
        aimGuard(fg2, ff2, x, 3.6, z, x2 - x, z2 - z);
      },
    },
  ];
  fogGuards.forEach((g) => { guards.push(g); g.patrol(0); });
  // Warm fill so the open floor + banks read.
  const fogFill = new THREE.PointLight(0xe8c090, 3.0, 48);
  fogFill.position.set(A3_CX, 8.5, FOG_MIDZ);
  fogFill.userData.rtRadius = 0.85;
  scene.add(fogFill);

  // ---- SET PIECE C — GOD-RAY HALL ----------------------------------------
  // A slitted wall (vertical slats + gaps) with strong lights BEHIND it and a
  // mild fog zone → the tracer's single-scatter volumetrics turn the gaps into
  // raking light shafts across the path. No guards. A central 3-wide gap is
  // walkable; the rest are light slits.
  const GR_Z0 = FOG_Z1;                     // -80.3
  const GR_DEPTH = 8, GR_Z1 = GR_Z0 - GR_DEPTH; // -88.3
  const GR_MIDZ = (GR_Z0 + GR_Z1) / 2;      // -84.3
  const GR_HALF = 5;                        // x ∈ [5, 15]
  roomFloor(A3_CX, GR_MIDZ, GR_HALF, GR_DEPTH);
  doorwayWall(GR_Z0, FOG_HALF);             // front (= fog back), at fog width
  wall(ROOM.t, ROOM.wallH, GR_DEPTH, A3_CX - GR_HALF, hy, GR_MIDZ); // left  x=5
  wall(ROOM.t, ROOM.wallH, GR_DEPTH, A3_CX + GR_HALF, hy, GR_MIDZ); // right x=15
  // Slat wall across the hall at z = GR_MIDZ. Slats are thin vertical boxes;
  // the central walkable gap is x ∈ [8.5, 11.5].
  const slatMat = new THREE.MeshStandardMaterial({ color: 0x1b1f26, roughness: 0.9 });
  function slat(x) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.35, ROOM.wallH, 0.4), slatMat);
    m.position.set(x, hy, GR_MIDZ);
    scene.add(m);
    occluders.push(m);
    boxes.push({ center: new THREE.Vector3(x, hy, GR_MIDZ), halfExtents: { x: 0.175, z: 0.2 }, rotationY: 0 });
  }
  for (let x = A3_CX - GR_HALF + 0.5; x <= 8.5; x += 1.0) slat(x); // left bank of slats
  for (let x = 11.5; x <= A3_CX + GR_HALF - 0.5; x += 1.0) slat(x); // right bank of slats
  // Lights behind the slats (−Z side) shining toward the player (+Z). Tuned so
  // the mild hall fog resolves into distinct SHAFTS through the gaps rather than
  // a white-out (too bright + too dense reads as uniform haze).
  const grLight1 = new THREE.PointLight(0xbfe0ff, 13, 24);
  grLight1.position.set(A3_CX - 2.6, 2.4, GR_Z1 + 1.4);
  grLight1.userData.rtRadius = 0.08;
  scene.add(grLight1);
  const grLight2 = new THREE.PointLight(0xffe6c0, 13, 24);
  grLight2.position.set(A3_CX + 2.6, 2.4, GR_Z1 + 1.4);
  grLight2.userData.rtRadius = 0.08;
  scene.add(grLight2);

  // ---- ACT 4 — THE FINAL VAULT (hardest room, the ONLY win beacon) -------
  const A4_Z0 = GR_Z1;                       // -88.3
  const A4_DEPTH = 18, A4_Z1 = A4_Z0 - A4_DEPTH; // -106.3
  const A4_MIDZ = (A4_Z0 + A4_Z1) / 2;       // -97.3
  const A4_HALF = A3_HALF;                    // 10.5
  roomFloor(A3_CX, A4_MIDZ, A4_HALF, A4_DEPTH);
  doorwayWall(A4_Z0, A4_HALF);               // front (= god-ray back)
  wall(A4_HALF * 2, ROOM.wallH, ROOM.t, A3_CX, hy, A4_Z1);           // back (solid — the end)
  wall(ROOM.t, ROOM.wallH, A4_DEPTH, A3_CX - A4_HALF, hy, A4_MIDZ);  // left
  wall(ROOM.t, ROOM.wallH, A4_DEPTH, A3_CX + A4_HALF, hy, A4_MIDZ);  // right
  // Cover: staggered crates + a central pillar guarding the beacon approach.
  box(2.6, 2.0, 2.2, A3_CX, -91.5);
  box(2.2, 1.8, 1.6, 4.5, -93.5, crateMat, 0.25);
  box(2.2, 1.8, 1.6, 15.5, -93.5, crateMat, -0.25);
  box(3.0, 1.6, 1.2, 8.0, -97.0, crateMat, Math.PI / 4.5);
  box(3.0, 1.6, 1.2, 12.0, -100.5, crateMat, -Math.PI / 4.5);
  box(1.8, 2.2, 1.8, 5.0, -101.5);
  box(1.8, 2.2, 1.8, 15.0, -101.5);
  pillar(0.7, 3.0, A3_CX, -100.5);
  // Three guards, mixed sweep patterns — the gauntlet's climax.
  const { l: a4g1, fixture: a4f1 } = guardLight(warm, 26);    // wide horizontal sweep near the entrance
  const { l: a4g2, fixture: a4f2 } = guardLight(magenta, 26); // ping-pong down the left approach
  const { l: a4g3, fixture: a4f3 } = guardLight(warm, 26);    // orbit the beacon
  const a4Guards = [
    {
      light: a4g1, fixture: a4f1, range: 8,
      patrol(t) {
        const pos = (tt) => [A3_CX + Math.sin(tt * 0.45) * 8.5, -92.5];
        const [x, z] = pos(t), [x2, z2] = pos(t + DT);
        aimGuard(a4g1, a4f1, x, 3.6, z, x2 - x, z2 - z);
      },
    },
    {
      light: a4g2, fixture: a4f2, range: 8,
      patrol(t) {
        const pos = (tt) => [6.0, -97.0 + Math.sin(tt * 0.5) * 6.0];
        const [x, z] = pos(t), [x2, z2] = pos(t + DT);
        aimGuard(a4g2, a4f2, x, 3.5, z, x2 - x, z2 - z);
      },
    },
    {
      light: a4g3, fixture: a4f3, range: 8,
      patrol(t) {
        const pos = (tt) => { const a = tt * 0.5; return [A3_CX + Math.cos(a) * 4.6, -103.0 + Math.sin(a) * 3.4]; };
        const [x, z] = pos(t), [x2, z2] = pos(t + DT);
        aimGuard(a4g3, a4f3, x, 3.4, z, x2 - x, z2 - z);
      },
    },
  ];
  a4Guards.forEach((g) => { guards.push(g); g.patrol(0); });
  // Cool fill for readability (this room is deep in the spine, far from the moon).
  const a4Fill = new THREE.PointLight(0xaec4e0, 3.2, 52);
  a4Fill.position.set(A3_CX, 9, A4_MIDZ);
  a4Fill.userData.rtRadius = 0.9;
  scene.add(a4Fill);

  // The ONE win-trigger beacon in the whole game, at the far end of act 4.
  // Low-poly cylinders keep the scene under the 256-tri emissive NEE cap so the
  // bridge studs are never dropped.
  const finalExit = new THREE.Vector3(A3_CX, 0.35, -104.0);
  const finalDisc = new THREE.Mesh(
    new THREE.CylinderGeometry(1.5, 1.5, 0.12, 24),
    new THREE.MeshStandardMaterial({ color: 0x0a1a16, emissive: 0x39f0c0, emissiveIntensity: 2.4 })
  );
  finalDisc.position.set(finalExit.x, 0.06, finalExit.z);
  scene.add(finalDisc);
  const finalRing = new THREE.Mesh(
    new THREE.CylinderGeometry(0.55, 0.7, 1.1, 16),
    new THREE.MeshStandardMaterial({ color: 0x0a1a16, emissive: 0x39f0c0, emissiveIntensity: 1.4 })
  );
  finalRing.position.set(finalExit.x, 0.55, finalExit.z);
  scene.add(finalRing);
  occluders.push(finalRing);
  const finalBeacon = { disc: finalDisc, ring: finalRing };

  // --- Checkpoints (respawn points) & fog zones exported for main.js ---
  // One checkpoint per challenge room / set-piece entrance: a detection respawn
  // never throws the player further back than the start of the room they are in.
  const checkpoints = {
    act1Spawn: spawn.clone(),                                        // act 1 start
    bridgeStart: new THREE.Vector3(DOOR_CX, 0.35, BRIDGE_Z0 - 1.2),  // ~ -9.5
    act2Start: new THREE.Vector3(A3_CX, 0.35, A3_Z0 - 1.2),          // patrol room ~ -35.5
    galleryStart: new THREE.Vector3(A3_CX, 0.35, GAL_Z0 - 1.2),      // ~ -53.5
    fogRoomStart: new THREE.Vector3(A3_CX, 0.35, FOG_Z0 - 1.2),      // ~ -63.5
    godrayStart: new THREE.Vector3(A3_CX, 0.35, GR_Z0 - 1.2),        // ~ -81.5
    finalStart: new THREE.Vector3(A3_CX, 0.35, A4_Z0 - 1.2),         // ~ -89.5
  };
  // Monotonic stage table: crossing plane z (moving −Z) advances to that stage
  // and adopts its checkpoint. main.js iterates this — stage 0 = act1Spawn base.
  const stages = [
    { z: backZ, checkpoint: checkpoints.bridgeStart },       // 1  bridge     (-8.3)
    { z: BRIDGE_MIDZ, checkpoint: checkpoints.act2Start },   // 2  patrol     (-21.3)
    { z: A3_Z1, checkpoint: checkpoints.galleryStart },      // 3  gallery    (-52.3)
    { z: GAL_Z1, checkpoint: checkpoints.fogRoomStart },     // 4  fog banks  (-62.3)
    { z: FOG_Z1, checkpoint: checkpoints.godrayStart },      // 5  god-rays   (-80.3)
    { z: GR_Z1, checkpoint: checkpoints.finalStart },        // 6  final vault(-88.3)
  ];

  // AABBs for the volumetric fog zones (library fog-zones build). density is the
  // suggested per-zone value; main.js composes rt.volumetric.zones from these.
  // Budget (≤ 8): bridge + patrol-haze + 3 fog banks + god-ray hall + final-mood
  //             = 7 zones.
  const bridgeZone = { min: [gapL - 0.7, -2, BRIDGE_Z1 - 0.2], max: [gapR + 0.7, 5, BRIDGE_Z0 + 0.3], density: 0.016 };
  const act3Zone = { min: [A3_CX - A3_HALF, -1, A3_Z1 - 0.2], max: [A3_CX + A3_HALF, 4, A3_Z0 + 0.2], density: 0.004 };
  const godrayZone = { min: [A3_CX - GR_HALF, -1, GR_Z1 - 0.2], max: [A3_CX + GR_HALF, 4, GR_Z0 + 0.2], density: 0.011 };
  const finalZone = { min: [A3_CX - A4_HALF, -1, A4_Z1 - 0.2], max: [A3_CX + A4_HALF, 4, A4_Z0 + 0.2], density: 0.005 };
  // The fog banks double as dense volumetric zones (their AABBs) AND concealment
  // volumes (checked in main.js detection).
  const fogBankZones = fogBanks.map((b) => ({ min: b.min, max: b.max, density: FOG_BANK_DENSITY }));

  const lights = [
    fill, ambientKey, ambientKey2, g1, g2, g3, gA, gB,
    a3Fill, galAccent1, galAccent2, fg1, fg2, fogFill, grLight1, grLight2,
    a4g1, a4g2, a4g3, a4Fill,
    ...candles.map((c) => c.light),
  ];

  return {
    scene, camera, ROOM,
    spawn, finalExit,
    occluders, boxes, cylinders,
    guards, fill, ambientKey, lights,
    finalBeacon, centralStatue,
    candles, checkpoints, stages,
    bridgeZone, act3Zone, godrayZone, finalZone,
    fogBanks, fogBankZones,
    studs,
    // Plane markers main.js uses for checkpoint/stage advancement.
    doorwayZ: backZ, bridgeMidZ: BRIDGE_MIDZ,
  };
}
