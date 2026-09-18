/**
 * Lightweight CAD viewport — industrial conveyor assembly (Three.js).
 * Believable proportions: frame, belt, motor/gearbox, sensors, cabinet.
 */
(function () {
  "use strict";

  function boot(canvas, opts) {
    opts = opts || {};
    if (!window.THREE) return null;
    const THREE = window.THREE;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      || window.innerWidth < 700;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b0c0e);
    scene.fog = new THREE.Fog(0x0b0c0e, 8, 22);

    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(4.2, 2.8, 5.2);
    camera.lookAt(0, 0.6, 0);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: !reduced, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, reduced ? 1 : 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const hemi = new THREE.HemisphereLight(0xb8c4d0, 0x1a1c20, 0.85);
    scene.add(hemi);
    const key = new THREE.DirectionalLight(0xffffff, 0.75);
    key.position.set(4, 8, 3);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0x5b8fa8, 0.25);
    fill.position.set(-3, 2, -2);
    scene.add(fill);

    // Ground grid (CAD)
    const grid = new THREE.GridHelper(12, 24, 0x3a4450, 0x222830);
    grid.position.y = 0;
    scene.add(grid);

    // Axes helper small
    const axes = new THREE.AxesHelper(0.6);
    axes.position.set(-4.5, 0.02, -3.5);
    scene.add(axes);

    const matSteel = new THREE.MeshStandardMaterial({ color: 0x8a929c, metalness: 0.55, roughness: 0.4 });
    const matFrame = new THREE.MeshStandardMaterial({ color: 0x4a5160, metalness: 0.35, roughness: 0.55 });
    const matBelt = new THREE.MeshStandardMaterial({ color: 0x2c3038, metalness: 0.1, roughness: 0.85 });
    const matMotor = new THREE.MeshStandardMaterial({ color: 0x3d6b4f, metalness: 0.3, roughness: 0.5 });
    const matSensor = new THREE.MeshStandardMaterial({ color: 0xb8a04a, metalness: 0.4, roughness: 0.35 });
    const matCab = new THREE.MeshStandardMaterial({ color: 0xd8dde3, metalness: 0.2, roughness: 0.45 });
    const matAccent = new THREE.MeshStandardMaterial({ color: 0x5b8fa8, metalness: 0.3, roughness: 0.4, emissive: 0x0a1520, emissiveIntensity: 0.2 });

    const root = new THREE.Group();
    scene.add(root);
    const parts = {};

    function box(w, h, d, mat) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
      m.castShadow = false;
      return m;
    }

    // Frame rails
    const frame = new THREE.Group();
    const railL = box(4.2, 0.08, 0.08, matFrame); railL.position.set(0, 0.55, -0.45);
    const railR = box(4.2, 0.08, 0.08, matFrame); railR.position.set(0, 0.55, 0.45);
    const leg1 = box(0.08, 0.55, 0.08, matFrame); leg1.position.set(-1.9, 0.275, -0.45);
    const leg2 = box(0.08, 0.55, 0.08, matFrame); leg2.position.set(-1.9, 0.275, 0.45);
    const leg3 = box(0.08, 0.55, 0.08, matFrame); leg3.position.set(1.9, 0.275, -0.45);
    const leg4 = box(0.08, 0.55, 0.08, matFrame); leg4.position.set(1.9, 0.275, 0.45);
    const cross = box(0.08, 0.08, 0.9, matFrame); cross.position.set(0, 0.35, 0);
    frame.add(railL, railR, leg1, leg2, leg3, leg4, cross);
    root.add(frame);
    parts.frame = frame;

    // Belt / conveyor deck
    const belt = box(4.0, 0.06, 0.72, matBelt);
    belt.position.set(0, 0.62, 0);
    root.add(belt);
    parts.belt = belt;

    // Rollers
    const rollers = new THREE.Group();
    for (let i = -3; i <= 3; i++) {
      const r = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.7, 12), matSteel);
      r.rotation.x = Math.PI / 2;
      r.position.set(i * 0.55, 0.58, 0);
      rollers.add(r);
    }
    root.add(rollers);
    parts.rollers = rollers;

    // Motor + gearbox
    const drive = new THREE.Group();
    const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.42, 20), matMotor);
    motor.rotation.z = Math.PI / 2;
    motor.position.set(2.15, 0.35, -0.85);
    const gearbox = box(0.28, 0.28, 0.28, matSteel);
    gearbox.position.set(1.85, 0.35, -0.85);
    const mount = box(0.5, 0.06, 0.35, matFrame);
    mount.position.set(2.0, 0.18, -0.85);
    drive.add(motor, gearbox, mount);
    root.add(drive);
    parts.drive = drive;

    // Sensors
    const sensors = new THREE.Group();
    const sIn = box(0.08, 0.22, 0.08, matSensor); sIn.position.set(-1.6, 0.85, 0.55);
    const sOut = box(0.08, 0.22, 0.08, matSensor); sOut.position.set(1.6, 0.85, 0.55);
    const bracket = box(0.04, 0.35, 0.04, matFrame);
    bracket.position.set(-1.6, 0.72, 0.55);
    sensors.add(sIn, sOut, bracket);
    root.add(sensors);
    parts.sensors = sensors;

    // Control cabinet
    const cabinet = box(0.55, 1.1, 0.35, matCab);
    cabinet.position.set(-2.6, 0.55, -1.1);
    const handle = box(0.02, 0.25, 0.04, matAccent);
    handle.position.set(-2.32, 0.55, -1.1);
    root.add(cabinet, handle);
    parts.cabinet = cabinet;

    // Product on belt
    const product = box(0.28, 0.18, 0.28, matAccent);
    product.position.set(-1.2, 0.74, 0);
    root.add(product);
    parts.product = product;

    let explode = 0;
    let camAngle = 0.55;
    let running = opts.running || false;
    let productX = -1.2;
    let highlight = null;

    function resize() {
      const parent = canvas.parentElement;
      const w = parent.clientWidth || 600;
      const h = parent.clientHeight || 420;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }
    resize();
    window.addEventListener("resize", resize);

    function setExplode(t) {
      explode = Math.max(0, Math.min(1, t));
      frame.position.y = explode * 0.15;
      belt.position.y = 0.62 + explode * 0.55;
      drive.position.set(explode * 0.8, explode * 0.2, explode * -0.6);
      sensors.position.set(0, explode * 0.9, explode * 0.5);
      cabinet.position.set(-2.6 - explode * 0.7, 0.55, -1.1 - explode * 0.4);
      handle.position.set(-2.32 - explode * 0.7, 0.55, -1.1 - explode * 0.4);
      product.visible = explode < 0.3;
    }

    function setHighlight(name) {
      Object.keys(parts).forEach((k) => {
        const g = parts[k];
        const meshes = g.isMesh ? [g] : g.children.filter((c) => c.isMesh);
        meshes.forEach((m) => {
          if (!m.userData._mat) m.userData._mat = m.material;
          m.material = m.userData._mat;
        });
      });
      highlight = name;
      if (name && parts[name]) {
        const g = parts[name];
        const meshes = g.isMesh ? [g] : g.children.filter((c) => c.isMesh);
        meshes.forEach((m) => {
          m.material = matAccent;
        });
      }
      const label = document.querySelector("[data-cad-part]");
      if (label) label.textContent = name ? partLabel(name) : "—";
    }

    function partLabel(name) {
      const map = {
        frame: "ASM-FRAME-001",
        belt: "CNV-BELT-0400",
        rollers: "ROL-SET-07",
        drive: "DRV-SEW-0.75kW",
        sensors: "SNS-PEPPERL-2",
        cabinet: "CAB-RITTAL-600",
        product: "WIP-UNIT",
      };
      return map[name] || name;
    }

    // Hover picking
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const pickables = [frame, belt, rollers, drive, sensors, cabinet];
    canvas.addEventListener("pointermove", (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(pickables, true);
      if (!hits.length) { setHighlight(null); return; }
      let obj = hits[0].object;
      while (obj && !Object.values(parts).includes(obj)) obj = obj.parent;
      const entry = Object.entries(parts).find(([, v]) => v === obj);
      setHighlight(entry ? entry[0] : null);
    });

    function tick(t) {
      const time = t * 0.001;
      if (!reduced) {
        camAngle += 0.0015;
        const r = 6.2 - explode * 1.2;
        camera.position.x = Math.cos(camAngle) * r;
        camera.position.z = Math.sin(camAngle) * r;
        camera.position.y = 2.4 + explode * 1.2;
        camera.lookAt(0, 0.5 + explode * 0.4, 0);
      }
      if (running && explode < 0.2) {
        productX += 0.012;
        if (productX > 1.8) productX = -1.8;
        product.position.x = productX;
        rollers.children.forEach((r) => { r.rotation.z -= 0.04; });
      }
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    // Scroll coupling for journey
    if (opts.scrollCouple) {
      const onScroll = () => {
        const section = canvas.closest("[data-step]") || document.querySelector("[data-journey-cad]");
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const view = window.innerHeight || 1;
        const p = 1 - Math.min(1, Math.max(0, rect.bottom / (view + rect.height)));
        if (opts.mode === "explode") setExplode(p);
        if (opts.mode === "run") { running = p > 0.3; setExplode(0); }
        if (opts.mode === "build") setExplode(1 - p);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    if (opts.explode != null) setExplode(opts.explode);
    if (opts.running) running = true;

    return { setExplode, setHighlight, setRunning: (v) => { running = v; }, resize };
  }

  function loadThree(cb) {
    if (window.THREE) return cb();
    const s = document.createElement("script");
    s.src = "https://unpkg.com/three@0.160.0/build/three.min.js";
    s.onload = cb;
    document.head.appendChild(s);
  }

  window.CadViewport = {
    mount(selector, opts) {
      const canvas = typeof selector === "string" ? document.querySelector(selector) : selector;
      if (!canvas) return;
      loadThree(() => boot(canvas, opts || {}));
    },
  };
})();
