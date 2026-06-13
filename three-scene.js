/* ═══════════════════════════════════════════════════════════
   KRISH PATEL — 3D SCENE ENGINE
   Three.js Hero Particles + Skill Sphere
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── PERFORMANCE DETECTION ─── */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isLowPerf = (navigator.hardwareConcurrency <= 2) || prefersReducedMotion;
  const isMobile = window.innerWidth < 768;

  if (prefersReducedMotion) return;

  /* ─── WAIT FOR THREE.JS TO LOAD ─── */
  function waitForThree(cb, attempts = 0) {
    if (typeof THREE !== 'undefined') {
      cb();
    } else if (attempts < 50) {
      setTimeout(() => waitForThree(cb, attempts + 1), 100);
    }
  }

  /* ════════════════════════════════════════════════════════
     HERO PARTICLE FIELD
  ════════════════════════════════════════════════════════ */
  function initHeroScene() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    let renderer, scene, camera, particles, animId;
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: !isMobile,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      canvas.style.display = 'none';
      return;
    }

    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));

    scene = new THREE.Scene();

    /* Camera */
    camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 2000);
    camera.position.z = 400;

    /* ── Particle Cloud ── */
    const PARTICLE_COUNT = isMobile ? 600 : 1400;
    const positions  = new Float32Array(PARTICLE_COUNT * 3);
    const colors     = new Float32Array(PARTICLE_COUNT * 3);
    const sizes      = new Float32Array(PARTICLE_COUNT);

    const colorA = new THREE.Color('#ff5500');  // accent orange
    const colorB = new THREE.Color('#00d4ff');  // cyan
    const colorC = new THREE.Color('#ffffff');  // white dim

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      /* Spread particles in a wide 3D volume */
      const spread = 700;
      positions[i * 3]     = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread;

      /* Color distribution */
      const t = Math.random();
      let c;
      if (t < 0.25)      c = colorA;
      else if (t < 0.45) c = colorB;
      else               c = colorC;

      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = Math.random() * 2.8 + 0.6;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('size',     new THREE.BufferAttribute(sizes, 1));

    /* Circular sprite texture */
    const spriteCanvas = document.createElement('canvas');
    spriteCanvas.width  = 32;
    spriteCanvas.height = 32;
    const ctx = spriteCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.4, 'rgba(255,255,255,0.5)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);
    const sprite = new THREE.CanvasTexture(spriteCanvas);

    const mat = new THREE.PointsMaterial({
      size: 2.5,
      map: sprite,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.75,
    });

    particles = new THREE.Points(geo, mat);
    scene.add(particles);

    /* ── Constellation Lines ── */
    if (!isMobile) {
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x334455,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
      });
      const linePositions = [];
      const sampleCount = 80;
      for (let i = 0; i < sampleCount; i++) {
        const ai = Math.floor(Math.random() * PARTICLE_COUNT);
        const bi = Math.floor(Math.random() * PARTICLE_COUNT);
        const ax = positions[ai * 3], ay = positions[ai * 3 + 1], az = positions[ai * 3 + 2];
        const bx = positions[bi * 3], by = positions[bi * 3 + 1], bz = positions[bi * 3 + 2];
        const dist = Math.sqrt((ax-bx)**2 + (ay-by)**2 + (az-bz)**2);
        if (dist < 150) {
          linePositions.push(ax, ay, az, bx, by, bz);
        }
      }
      if (linePositions.length) {
        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
        scene.add(new THREE.LineSegments(lineGeo, lineMat));
      }
    }

    /* ── Mouse parallax ── */
    const hero = document.getElementById('home');
    const onMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
      mouseY = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    };
    hero.addEventListener('mousemove', onMouseMove, { passive: true });

    /* ── Resize handler ── */
    const onResize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize, { passive: true });

    /* ── Animation loop ── */
    let frameCount = 0;
    function animate() {
      animId = requestAnimationFrame(animate);
      frameCount++;

      /* Lazy camera ease — only update every other frame on mobile */
      if (!isMobile || frameCount % 2 === 0) {
        targetX += (mouseX * 0.6 - targetX) * 0.04;
        targetY += (mouseY * 0.4 - targetY) * 0.04;
        camera.position.x += (targetX * 60 - camera.position.x) * 0.05;
        camera.position.y += (-targetY * 40 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
      }

      /* Slow rotation of particle field */
      particles.rotation.y += 0.0004;
      particles.rotation.x += 0.0001;

      renderer.render(scene, camera);
    }
    animate();

    /* ── Cleanup when section leaves view ── */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          cancelAnimationFrame(animId);
        } else {
          animate();
        }
      });
    }, { threshold: 0 });
    observer.observe(hero);

    /* ── Cleanup on unload ── */
    window.addEventListener('beforeunload', () => {
      cancelAnimationFrame(animId);
      geo.dispose();
      mat.dispose();
      sprite.dispose();
      renderer.dispose();
    });
  }

  /* ════════════════════════════════════════════════════════
     SKILL SPHERE
  ════════════════════════════════════════════════════════ */
  function initSkillSphere() {
    const canvas = document.getElementById('skill-sphere-canvas');
    if (!canvas) return;

    let renderer, scene, camera, sphere, wireframe, animId;
    let autoRotX = 0, autoRotY = 0;
    let mouseOver = false;
    let targetRotX = 0, targetRotY = 0;

    const size = isMobile ? 260 : 320;
    canvas.width  = size;
    canvas.height = size;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
    } catch (e) {
      canvas.style.display = 'none';
      return;
    }

    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4.5;

    /* ── Icosahedron Wireframe ── */
    const geoSphere = new THREE.IcosahedronGeometry(2, isMobile ? 2 : 3);
    const edgeGeo   = new THREE.EdgesGeometry(geoSphere);

    const wireMat = new THREE.LineBasicMaterial({
      color: 0xff5500,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    wireframe = new THREE.LineSegments(edgeGeo, wireMat);
    scene.add(wireframe);

    /* ── Inner glow sphere ── */
    const glowGeo = new THREE.SphereGeometry(1.85, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xff5500,
      transparent: true,
      opacity: 0.04,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(glowGeo, glowMat));

    /* ── Outer glow ring ── */
    const ringGeo = new THREE.TorusGeometry(2.2, 0.015, 8, 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    /* ── CSS skill tags orbiting the sphere ── */
    const skills = [
      'Node.js', 'React', 'MongoDB', 'Python', 'Docker',
      'AWS', 'Figma', 'Express', 'MySQL', 'RabbitMQ',
      'Photoshop', 'Git', 'Socket.io', 'REST API', 'PySpark',
    ];

    const wrapper = canvas.parentElement;
    const tagContainer = document.createElement('div');
    tagContainer.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
    wrapper.style.position = 'relative';
    wrapper.appendChild(tagContainer);

    const tagElements = skills.map((skill, i) => {
      const el = document.createElement('span');
      el.textContent = skill;
      el.style.cssText = `
        position: absolute;
        font-family: var(--font-mono, monospace);
        font-size: 9px;
        font-weight: 600;
        letter-spacing: 0.06em;
        color: rgba(255,255,255,0.55);
        background: rgba(255,85,0,0.08);
        border: 1px solid rgba(255,85,0,0.18);
        padding: 3px 8px;
        border-radius: 999px;
        white-space: nowrap;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s;
      `;
      tagContainer.appendChild(el);
      return el;
    });

    /* ── Mouse interaction ── */
    const onMouseEnter = () => { mouseOver = true; };
    const onMouseLeave = () => { mouseOver = false; };
    canvas.addEventListener('mouseenter', onMouseEnter);
    canvas.addEventListener('mouseleave', onMouseLeave);

    /* ── Animate ── */
    let t = 0;
    function animate() {
      animId = requestAnimationFrame(animate);
      t += 0.008;

      /* Auto-rotate */
      autoRotY += 0.005;
      autoRotX += 0.002;

      if (!mouseOver) {
        wireframe.rotation.y = autoRotY;
        wireframe.rotation.x = autoRotX;
        ring.rotation.z      = autoRotY * 0.5;
      } else {
        wireframe.rotation.y += (targetRotY - wireframe.rotation.y) * 0.05;
        wireframe.rotation.x += (targetRotX - wireframe.rotation.x) * 0.05;
      }

      /* Pulsing opacity on wireframe */
      wireMat.opacity = 0.25 + Math.sin(t * 1.5) * 0.10;
      ringMat.opacity = 0.35 + Math.sin(t * 2)   * 0.15;

      /* Position skill tags on sphere surface */
      const phi_count = skills.length;
      for (let i = 0; i < phi_count; i++) {
        const phi   = Math.acos(-1 + (2 * i) / phi_count);
        const theta = Math.sqrt(phi_count * Math.PI) * phi + t * 0.15 + (i % 2 === 0 ? t * 0.08 : -t * 0.05);

        const r = 2.1;
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        /* Rotate by wireframe rotation */
        const ry = wireframe.rotation.y;
        const rx = wireframe.rotation.x;

        /* Apply Y rotation */
        const x1 = x * Math.cos(ry) - z * Math.sin(ry);
        const z1 = x * Math.sin(ry) + z * Math.cos(ry);
        /* Apply X rotation */
        const y2 = y * Math.cos(rx) - z1 * Math.sin(rx);
        const z2 = y * Math.sin(rx) + z1 * Math.cos(rx);

        /* Project 3D to 2D */
        const fov    = 45 * Math.PI / 180;
        const focalL = (size / 2) / Math.tan(fov / 2);
        const d      = camera.position.z - z2;
        const px     = (x1 / d) * focalL + size / 2;
        const py     = (-y2 / d) * focalL + size / 2;

        const el = tagElements[i];
        el.style.left = px + 'px';
        el.style.top  = py + 'px';

        /* Fade based on depth */
        const depth = (z2 + 2.1) / 4.2;
        el.style.opacity = (0.15 + depth * 0.85).toFixed(2);
        el.style.zIndex  = Math.round(depth * 10);
      }

      renderer.render(scene, camera);
    }
    animate();

    /* ── Lazy init via IntersectionObserver ── */
    const about = document.getElementById('about');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) cancelAnimationFrame(animId);
        else animate();
      });
    }, { threshold: 0.1 });
    if (about) obs.observe(about);

    /* Cleanup */
    window.addEventListener('beforeunload', () => {
      cancelAnimationFrame(animId);
      geoSphere.dispose();
      edgeGeo.dispose();
      wireMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    });
  }

  /* ── BOOT ── */
  waitForThree(() => {
    /* Hero particles — init immediately */
    initHeroScene();

    /* Skill sphere — init when about section is close */
    const about = document.getElementById('about');
    if (about) {
      const lazyObs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          initSkillSphere();
          lazyObs.disconnect();
        }
      }, { rootMargin: '200px' });
      lazyObs.observe(about);
    } else {
      initSkillSphere();
    }
  });

})();
