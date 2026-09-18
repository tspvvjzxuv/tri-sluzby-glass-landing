/**
 * Professional CAD viewport — industrial belt conveyor.
 * Grey RAL-like materials, studio lighting, believable detailing.
 */
(function () {
  "use strict";

  function boot(canvas, opts) {
    opts = opts || {};
    if (!window.THREE) return null;
    const THREE = window.THREE;
    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.innerWidth < 720;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1c1f);
    scene.fog = new THREE.Fog(0x1a1c1f, 11, 30);

    const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 80);
    camera.position.set(5.6, 3.4, 6.4);
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, reduced ? 1.25 : 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.02;
    renderer.shadowMap.enabled = !reduced;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    scene.add(new THREE.AmbientLight(0x9aa3ad, 0.42));
    scene.add(new THREE.HemisphereLight(0xd4d8dc, 0x2a2e34, 0.5));

    const key = new THREE.DirectionalLight(0xf4f6f8, 1.0);
    key.position.set(6, 10, 5);
    key.castShadow = !reduced;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 28;
    key.shadow.camera.left = -7;
    key.shadow.camera.right = 7;
    key.shadow.camera.top = 7;
    key.shadow.camera.bottom = -7;
    key.shadow.bias = -0.00025;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xaab2ba, 0.32);
    fill.position.set(-6, 4, -3);
    scene.add(fill);
    const rim = new THREE.DirectionalLight(0xc8ced4, 0.2);
    rim.position.set(1, 3, -7);
    scene.add(rim);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(22, 22),
      new THREE.MeshStandardMaterial({ color: 0x212428, metalness: 0.04, roughness: 0.94 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const grid = new THREE.GridHelper(14, 28, 0x3a4048, 0x2a2e34);
    grid.position.y = 0.003;
    if (grid.material) {
      grid.material.transparent = true;
      grid.material.opacity = 0.45;
    }
    scene.add(grid);

    // RAL-inspired greys only (no toy colors)
    const matFrame = std(0x5a616a, 0.65, 0.36);
    const matSteel = std(0x8e959e, 0.82, 0.26);
    const matDark = std(0x3a4048, 0.55, 0.4);
    const matBelt = std(0x2c3036, 0.06, 0.9);
    const matMotor = std(0x4e5660, 0.48, 0.4);
    const matCab = std(0xb4bac2, 0.22, 0.5);
    const matCabDoor = std(0xa8aeb6, 0.28, 0.46);
    const matRubber = std(0x1e2228, 0.05, 0.85);
    const matLens = new THREE.MeshStandardMaterial({
      color: 0x14181e,
      metalness: 0.3,
      roughness: 0.2,
      emissive: 0x4a5058,
      emissiveIntensity: 0.12,
    });
    const matSelect = new THREE.MeshStandardMaterial({
      color: 0x7a8896,
      metalness: 0.4,
      roughness: 0.35,
      emissive: 0x2a3340,
      emissiveIntensity: 0.25,
    });

    function std(color, metalness, roughness) {
      return new THREE.MeshStandardMaterial({ color, metalness, roughness });
    }

    function mesh(geo, mat) {
      const m = new THREE.Mesh(geo, mat);
      m.castShadow = !reduced;
      m.receiveShadow = true;
      return m;
    }

    function box(w, h, d, mat) {
      return mesh(new THREE.BoxGeometry(w, h, d), mat);
    }

    const root = new THREE.Group();
    scene.add(root);
    const parts = {};
    const segs = reduced ? 16 : 32;

    // —— Frame weldment ——
    const frame = new THREE.Group();
    const railGeo = new THREE.BoxGeometry(4.4, 0.07, 0.09);
    [-0.48, 0.48].forEach((z) => {
      const r = mesh(railGeo, matFrame);
      r.position.set(0, 0.58, z);
      frame.add(r);
    });
    // Legs with feet
    [[-2.0, -0.48], [-2.0, 0.48], [2.0, -0.48], [2.0, 0.48]].forEach(([x, z]) => {
      const leg = box(0.07, 0.58, 0.07, matFrame);
      leg.position.set(x, 0.29, z);
      frame.add(leg);
      const foot = box(0.16, 0.03, 0.16, matDark);
      foot.position.set(x, 0.015, z);
      frame.add(foot);
    });
    // Cross members
    [-1.2, 0, 1.2].forEach((x) => {
      const c = box(0.06, 0.05, 0.96, matFrame);
      c.position.set(x, 0.32, 0);
      frame.add(c);
    });
    // Side guards
    [-0.55, 0.55].forEach((z) => {
      const g = box(4.2, 0.12, 0.025, matSteel);
      g.position.set(0, 0.72, z);
      frame.add(g);
    });
    root.add(frame);
    parts.frame = frame;

    // —— Belt module ——
    const beltG = new THREE.Group();
    const deck = box(4.15, 0.045, 0.78, matBelt);
    deck.position.set(0, 0.64, 0);
    beltG.add(deck);
    // Belt surface detail strips
    for (let i = -8; i <= 8; i++) {
      const strip = box(0.04, 0.008, 0.76, matRubber);
      strip.position.set(i * 0.24, 0.665, 0);
      beltG.add(strip);
    }
    // End drums
    [-2.05, 2.05].forEach((x) => {
      const drum = mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.82, segs), matSteel);
      drum.rotation.x = Math.PI / 2;
      drum.position.set(x, 0.62, 0);
      beltG.add(drum);
    });
    root.add(beltG);
    parts.belt = beltG;

    // —— Rollers ——
    const rollers = new THREE.Group();
    for (let i = -5; i <= 5; i++) {
      const r = mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.74, segs), matSteel);
      r.rotation.x = Math.PI / 2;
      r.position.set(i * 0.36, 0.595, 0);
      rollers.add(r);
    }
    root.add(rollers);
    parts.rollers = rollers;

    // —— Drive SEW-style ——
    const drive = new THREE.Group();
    const motorBody = mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.48, segs), matMotor);
    motorBody.rotation.z = Math.PI / 2;
    motorBody.position.set(2.25, 0.32, -0.92);
    drive.add(motorBody);
    const motorFan = mesh(new THREE.CylinderGeometry(0.145, 0.145, 0.06, segs), matDark);
    motorFan.rotation.z = Math.PI / 2;
    motorFan.position.set(2.52, 0.32, -0.92);
    drive.add(motorFan);
    const motorFront = mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.05, segs), matSteel);
    motorFront.rotation.z = Math.PI / 2;
    motorFront.position.set(1.98, 0.32, -0.92);
    drive.add(motorFront);
    const gearbox = box(0.32, 0.3, 0.3, matSteel);
    gearbox.position.set(1.78, 0.32, -0.92);
    drive.add(gearbox);
    const gbCap = box(0.34, 0.04, 0.32, matDark);
    gbCap.position.set(1.78, 0.48, -0.92);
    drive.add(gbCap);
    const mountPlate = box(0.55, 0.05, 0.4, matFrame);
    mountPlate.position.set(1.95, 0.14, -0.92);
    drive.add(mountPlate);
    const shaft = mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.35, 12), matSteel);
    shaft.rotation.x = Math.PI / 2;
    shaft.position.set(1.78, 0.32, -0.7);
    drive.add(shaft);
    // Cooling fins hint
    for (let i = 0; i < 6; i++) {
      const fin = box(0.01, 0.22, 0.28, matDark);
      fin.position.set(2.1 + i * 0.035, 0.32, -0.92);
      drive.add(fin);
    }
    root.add(drive);
    parts.drive = drive;

    // —— Sensors ——
    const sensors = new THREE.Group();
    function peSensor(x) {
      const g = new THREE.Group();
      const body = box(0.07, 0.2, 0.07, matSensor);
      body.position.set(0, 0.1, 0);
      g.add(body);
      const lens = mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.02, 16), matLens);
      lens.rotation.x = Math.PI / 2;
      lens.position.set(0, 0.12, 0.045);
      g.add(lens);
      const bracket = box(0.03, 0.42, 0.03, matFrame);
      bracket.position.set(0, -0.05, 0);
      g.add(bracket);
      const base = box(0.12, 0.025, 0.08, matDark);
      base.position.set(0, -0.26, 0);
      g.add(base);
      g.position.set(x, 0.9, 0.58);
      return g;
    }
    sensors.add(peSensor(-1.7), peSensor(1.7));
    root.add(sensors);
    parts.sensors = sensors;

    // —— Control cabinet (RAL 7035-ish) ——
    const cabinet = new THREE.Group();
    const cabBody = box(0.58, 1.2, 0.38, matCab);
    cabBody.position.set(0, 0.6, 0);
    cabinet.add(cabBody);
    const door = box(0.54, 1.12, 0.02, matCabDoor);
    door.position.set(0, 0.6, 0.2);
    cabinet.add(door);
    const handle = box(0.02, 0.22, 0.035, matSteel);
    handle.position.set(0.2, 0.58, 0.23);
    cabinet.add(handle);
    const plinth = box(0.6, 0.08, 0.4, matDark);
    plinth.position.set(0, 0.04, 0);
    cabinet.add(plinth);
    // Vent louvers
    for (let i = 0; i < 5; i++) {
      const lou = box(0.2, 0.012, 0.01, matDark);
      lou.position.set(-0.12, 1.0 - i * 0.04, 0.21);
      cabinet.add(lou);
    }
    // Cable duct to frame
    const duct = box(0.8, 0.04, 0.04, matDark);
    duct.position.set(0.55, 0.25, 0.1);
    cabinet.add(duct);
    cabinet.position.set(-2.75, 0, -1.15);
    root.add(cabinet);
    parts.cabinet = cabinet;

    // WIP unit on belt
    const product = new THREE.Group();
    const crate = box(0.32, 0.2, 0.28, matSteel);
    crate.position.y = 0.1;
    product.add(crate);
    const crateTop = box(0.34, 0.02, 0.3, matDark);
    crateTop.position.y = 0.21;
    product.add(crateTop);
    product.position.set(-1.1, 0.665, 0);
    root.add(product);
    parts.product = product;

    // Origin marker (subtle)
    const origin = mesh(new THREE.SphereGeometry(0.025, 12, 12), matSteel);
    origin.position.set(0, 0.02, 0);
    scene.add(origin);

    let explode = opts.explode != null ? opts.explode : 0;
    let camAngle = 0.62;
    let running = !!opts.running;
    let productX = -1.1;

    const labels = {
      frame: "ASM-FRAME-001",
      belt: "CNV-BELT-0400",
      rollers: "ROL-SET-11",
      drive: "DRV-SEW-0.75",
      sensors: "SNS-PE-PAIR",
      cabinet: "CAB-VX25-600",
      product: "WIP-UNIT",
    };

    function setExplode(t) {
      explode = Math.max(0, Math.min(1, t));
      const e = explode;
      frame.position.set(0, e * 0.08, 0);
      beltG.position.set(0, e * 0.55, 0);
      rollers.position.set(0, e * 0.35, 0);
      drive.position.set(e * 0.85, e * 0.25, e * -0.55);
      sensors.position.set(0, e * 0.75, e * 0.45);
      cabinet.position.set(-2.75 - e * 0.85, 0, -1.15 - e * 0.35);
      product.visible = e < 0.25;
    }

    function setHighlight(name) {
      Object.keys(parts).forEach((k) => {
        parts[k].traverse((o) => {
          if (!o.isMesh) return;
          if (!o.userData._mat) o.userData._mat = o.material;
          o.material = o.userData._mat;
        });
      });
      if (name && parts[name]) {
        parts[name].traverse((o) => {
          if (o.isMesh) o.material = matSelect;
        });
      }
      document.querySelectorAll("[data-cad-part]").forEach((el) => {
        el.textContent = name ? labels[name] || name : "—";
      });
    }

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const pickables = [frame, beltG, rollers, drive, sensors, cabinet];

    canvas.addEventListener("pointermove", (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(pickables, true);
      if (!hits.length) {
        setHighlight(null);
        return;
      }
      let obj = hits[0].object;
      while (obj && obj.parent && !Object.values(parts).includes(obj)) obj = obj.parent;
      const hit = Object.entries(parts).find(([, v]) => v === obj);
      setHighlight(hit ? hit[0] : null);
    });

    function resize() {
      const parent = canvas.parentElement;
      const w = parent.clientWidth || 640;
      const h = Math.max(parent.clientHeight || 420, 360);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }
    resize();
    window.addEventListener("resize", resize);

    function tick(t) {
      if (!reduced) {
        camAngle += 0.0012;
        const r = 7.2 - explode * 1.4;
        camera.position.x = Math.cos(camAngle) * r;
        camera.position.z = Math.sin(camAngle) * r * 0.95;
        camera.position.y = 2.8 + explode * 1.4;
        camera.lookAt(0, 0.45 + explode * 0.35, 0);
      }
      if (running && explode < 0.2) {
        productX += 0.01;
        if (productX > 1.85) productX = -1.85;
        product.position.x = productX;
        rollers.children.forEach((r) => {
          r.rotation.z -= 0.035;
        });
      }
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    if (opts.scrollCouple) {
      const onScroll = () => {
        const section =
          canvas.closest("[data-step]") || document.querySelector("[data-journey-cad]");
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const view = window.innerHeight || 1;
        const p = 1 - Math.min(1, Math.max(0, rect.bottom / (view + rect.height)));
        if (opts.mode === "explode") setExplode(p);
        if (opts.mode === "run") {
          running = p > 0.25;
          setExplode(0);
        }
        if (opts.mode === "build") setExplode(1 - p);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    setExplode(explode);
    return { setExplode, setHighlight, resize };
  }

  const _queue = [];
  let _loading = false;
  function loadThree(cb) {
    if (window.THREE) return cb();
    _queue.push(cb);
    if (_loading) return;
    _loading = true;
    const s = document.createElement("script");
    s.src = "https://unpkg.com/three@0.160.0/build/three.min.js";
    s.onload = () => _queue.splice(0).forEach((fn) => fn());
    document.head.appendChild(s);
  }

  window.CadViewport = {
    mount(selector, opts) {
      const el = typeof selector === "string" ? document.querySelector(selector) : selector;
      if (!el) return;
      loadThree(() => boot(el, opts || {}));
    },
  };
})();
