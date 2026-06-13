/* ═══════════════════════════════════════════════════════════
   KRISH PATEL — PREMIUM 3D PORTFOLIO
   Core Interactions · Animations · v2.0
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ════════════════════════════════════════════════════════
   PROJECT DATA (unchanged from original)
════════════════════════════════════════════════════════ */
const projectData = {
  1: {
    title: "Brew & Bloom Coffee Co.",
    category: "Logo Design · Café",
    isDesign: true,
    gradientClass: "thumb-coffee",
    image: "assets/brew-bloom.png",
    brief: "Brew & Bloom Coffee Co., an artisanal specialty roastery based in Portland, needed an organic botanical logo suite and clean brand usage guidelines. The identity had to balance warmth and prestige to attract urban coffee enthusiasts.",
    process: [
      { num: "01", title: "Concept sketch", desc: "Designed hand-drawn leaf lines combined with a custom botanical monogram and rich serif font drafts." },
      { num: "02", title: "Vector Refine", desc: "Vectorized the chosen design in Illustrator, adjusting curve nodes for maximum scalability and stroke balance." },
      { num: "03", title: "Final Delivery", desc: "Created horizontal and circular lockups, defined primary colors (Forest Green, Cream, Ochre) and style handbook." }
    ],
    tools: ["Figma", "Adobe Illustrator", "Branding", "Vector Design"],
    testimonial: "Krish captured our vision beautifully. The botanical elements are elegant, and the responsive guidelines made launching our branded packaging a breeze!",
    client: "Sarah Jensen, Founder of Brew & Bloom",
    outcome: "Brand kit successfully deployed across packaging, bags, and storefront. Resulted in a 40% increase in social media engagement post-launch."
  },
  2: {
    title: "NovaBit Labs",
    category: "Logo Design · Tech Startup",
    isDesign: true,
    gradientClass: "thumb-tech",
    image: "assets/novabit.png",
    brief: "NovaBit Labs, an early-stage fintech platform, required a high-tech minimalist brandmark. The icon needed to represent network data transmission, security, and high speed, utilizing a modern cyan-midnight color system.",
    process: [
      { num: "01", title: "Grid Layout", desc: "Sketched abstract geometric 'N' and 'B' symbols showcasing a network grid node and speed lines." },
      { num: "02", title: "Isometric Grid", desc: "Refined the icon geometry on an isometric grid in Illustrator, aligning nodes and utilizing precise line spacing." },
      { num: "03", title: "Asset Bundle", desc: "Created responsive variants (horizontal wordmark, stacked, and app favicon) optimized for dark and light UI displays." }
    ],
    tools: ["Figma", "Adobe Illustrator", "Fintech Branding", "UI Design"],
    testimonial: "An outstanding, modern design that perfectly captures our technological core. Krish was incredibly responsive and delivered flawless vector files.",
    client: "Ravi Sharma, CEO of NovaBit Labs",
    outcome: "Brandmark adopted across website, mobile app, and corporate pitch deck. Secured a positive reception during Seed Series funding."
  },
  3: {
    title: "Verde Kitchen — Instagram Feed",
    category: "Social Media · Restaurant",
    isDesign: true,
    gradientClass: "thumb-restaurant",
    image: "assets/verde-kitchen.png",
    brief: "Verde Kitchen, a high-end organic plant-based restaurant, needed a cohesive 12-post spring launch Instagram template. The goal was to visual showcase fresh ingredients and local farm aesthetics.",
    process: [
      { num: "01", title: "Grid Flow", desc: "Mocked up a cohesive 9-grid checkerboard feed structure alternating food photography and typographic quote posts." },
      { num: "02", title: "Carousels", desc: "Designed three high-engagement swipeable carousels describing recipe origins, and customized Instagram story layouts." },
      { num: "03", title: "Aesthetics", desc: "Balanced color contrasts using custom green-cream presets in Photoshop, maintaining a premium look." }
    ],
    tools: ["Adobe Photoshop", "Canva Pro", "Figma", "Social Media Graphics"],
    testimonial: "Our feed looks incredibly clean and cohesive. We saw an immediate surge in organic reservations and our story views doubled in the first week!",
    client: "Maya Goel, Marketing Manager at Verde Kitchen",
    outcome: "Feed aesthetic completed; boosted organic reservations by 25% within 30 days and increased follower engagement rate by 4.2%."
  },
  4: {
    title: "Aurelie Clothing — Instagram Ad",
    category: "Social Media · Fashion Brand",
    isDesign: true,
    gradientClass: "thumb-clothing",
    image: "assets/aurelie.png",
    brief: "Aurelie Clothing, a luxury streetwear startup, needed a bold visual identity campaign for their seasonal product drop. They required high-contrast editorial ad designs for Instagram and Facebook feeds.",
    process: [
      { num: "01", title: "Moodboard", desc: "Analyzed industrial design trends to mock up bold, heavy typographic layouts paired with high-contrast model assets." },
      { num: "02", title: "Ad Layouts", desc: "Created call-to-action overlays and designed interactive swipe-up story templates using clean bold layouts." },
      { num: "03", title: "Motion Hook", desc: "Assembled a basic motion graphics teaser in After Effects showing rapid frame shifts to hook viewers in 3 seconds." }
    ],
    tools: ["Adobe Photoshop", "Adobe After Effects", "Figma", "Social Ad Design"],
    testimonial: "Krish brought a fresh, high-fashion editorial angle to our campaign. The ad CTRs exceeded our benchmarks by 60%!",
    client: "Chloe Dubois, Creative Director of Aurelie",
    outcome: "Ad layouts went live in Paid campaigns, generating a record 3.8x ROAS and complete sell-out of the limited collection."
  },
  5: {
    title: "TechTalks by Arjun Thumbnail",
    category: "YouTube Thumbnail · Tech Channel",
    isDesign: true,
    gradientClass: "thumb-youtube",
    image: "assets/techtalks.png",
    brief: "A popular Indian tech YouTuber with 280K subscribers needed an eye-catching, high-CTR YouTube thumbnail for a high-effort video: 'I Tried Every AI Tool for 30 Days'.",
    process: [
      { num: "01", title: "Composition", desc: "Designed three thumbnail concepts prioritizing emotional facial cutouts, bright red-black contrasts, and bold readable text." },
      { num: "02", title: "Subject Glow", desc: "Isolated the subject, applied high-pass sharpening, adjusted lighting for visual pop, and drew glowing outline strokes." },
      { num: "03", title: "AI Overlays", desc: "Added glowing logo vectors of popular AI tools to create context and build intrigue within milliseconds." }
    ],
    tools: ["Adobe Photoshop", "Graphic Design", "YouTube Marketing", "A/B Testing"],
    testimonial: "Krish is a wizard. This thumbnail gave us a 12.4% click-through rate, making it our most viral video this quarter!",
    client: "Arjun Sen, Content Creator of TechTalks",
    outcome: "Thumbnail delivered in 24 hours. The video reached 1.2M views in two weeks, boosting average channel CTR by 4.8%."
  },
  6: {
    title: "IronEdge Gym Poster Design",
    category: "Poster / Flyer · Fitness",
    isDesign: true,
    gradientClass: "thumb-gym",
    image: "assets/ironedge.png",
    brief: "IronEdge Gym needed a bold print poster and matching flyer for their 'Iron Week' 7-day fitness challenge. The design had to convey heavy energy, strength, and community.",
    process: [
      { num: "01", title: "Typography", desc: "Created a dynamic typographic hierarchy focusing on a rugged, high-contrast distressed font over a gym action photo." },
      { num: "02", title: "Color Contrast", desc: "Used a dark slate background with electric orange highlights to draw immediate attention to the event dates and registration link." },
      { num: "03", title: "Print Setup", desc: "Prepped print-ready CMYK files at 300dpi in A3 size, and generated cropped 1:1 formats for Instagram distribution." }
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Print Layouts", "Aesthetics"],
    testimonial: "Outstanding work! The posters looked phenomenal when printed. We hit our maximum participation limit within 4 days.",
    client: "Marcus Thorne, Gym Manager",
    outcome: "A3 event posters printed and displayed in 5 gym locations; challenge reached capacity and registered 150+ new memberships."
  },
  7: {
    title: "LexGroup Legal Brand Identity",
    category: "Brand Kit · Law Firm",
    isDesign: true,
    gradientClass: "thumb-lexgroup",
    image: null,
    brief: "LexGroup Legal required an exhaustive brand identity overhaul to reflect corporate prestige, trust, and premium counsel. A gold-charcoal palette was selected.",
    process: [
      { num: "01", title: "Crest Design", desc: "Created a minimal balancing scales emblem combined with a customized classical serif typeface." },
      { num: "02", title: "Stationery Kit", desc: "Designed professional double-sided business cards, email signatures, letterhead, and matching custom slide decks." },
      { num: "03", title: "Brand Guidelines", desc: "Compiled a detailed stylebook outlining exact primary and secondary color hexes, hierarchy rules, and print stocks." }
    ],
    tools: ["Adobe Illustrator", "Figma", "Branding Guidelines", "Stationery Mockup"],
    testimonial: "Sophisticated, clean, and commanding. Krish developed a brand kit that perfectly mirrors the high-end counsel we offer.",
    client: "Arthur Pendelton, Senior Partner at LexGroup",
    outcome: "Full corporate rebrand completed. Brand book distributed to 45 associate lawyers, establishing complete visual consistency."
  },
  8: {
    title: "Nestline — Property Search UI",
    category: "Landing Page Mockup · Proptech",
    isDesign: true,
    gradientClass: "thumb-nestline",
    image: null,
    brief: "Nestline, a real estate proptech startup, required a conversion-optimized landing page design. The goal was to provide an incredibly clean property search interface.",
    process: [
      { num: "01", title: "Wireframes", desc: "Drafted interactive wireframes outlining above-the-fold search fields, grid cards, and customer testimonials." },
      { num: "02", title: "UI Mockups", desc: "Engineered a reliable blue-white layout with rounded UI shapes, high-end shadows, and modern real estate illustration vectors." },
      { num: "03", title: "Handoff File", desc: "Built interactive hover states and fluid mobile drawer navigation in Figma to ensure perfect developer handoff." }
    ],
    tools: ["Figma", "UI/UX Design", "Wireframing", "Responsive Layout"],
    testimonial: "Krish's mockups are incredibly detailed. Our frontend developer was able to build the landing page in record time with zero guesswork.",
    client: "Ravi Patel, Tech Lead at Nestline",
    outcome: "Figma interactive design approved; developers built and launched the site, leading to a 22% improvement in user signups during beta."
  },
  9: {
    title: "WanderLust — Travel Platform",
    category: "Full-Stack · MERN Web App",
    isDesign: false,
    gradientClass: "thumb-wanderlust",
    image: null,
    github: "https://github.com/Kris143k/wanderlust",
    brief: "WanderLust is a real-world full-stack travel platform where travelers can view, review, and book global vacation rentals. Built with secure authentication and dynamic database mapping.",
    process: [
      { num: "01", title: "Express API", desc: "Engineered REST APIs in Node.js/Express, setting up schema models in MongoDB and implementing session cookies." },
      { num: "02", title: "React Frontend", desc: "Created a fully responsive UI in React, including interactive review modules, image uploads, and search filtering." },
      { num: "03", title: "Deployment", desc: "Configured environment variables, optimized database queries, and deployed the MERN app to Cloud Hosting." }
    ],
    tools: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "REST APIs", "Render"],
    testimonial: "Personal developer project. Demonstrated complete mastery of database associations, secure CRUD operations, and responsive SPA design.",
    client: "Krish Patel (Self-Project)",
    outcome: "Fully functional platform deployed on Render. Handled 500+ mock database listings with search filter response times under 120ms."
  },
  10: {
    title: "Realtime Messaging Application",
    category: "Real-Time · WebSockets",
    isDesign: false,
    gradientClass: "thumb-chatapp",
    image: null,
    github: "https://github.com/Kris143k/CHAT-APP",
    brief: "Built a production-ready real-time instant messaging web application featuring channel support, user presence, and typing notifications.",
    process: [
      { num: "01", title: "Socket Server", desc: "Established bidirectional event-driven communication channels using WebSockets (Socket.io) with a Node.js server." },
      { num: "02", title: "DB Persistence", desc: "Configured MongoDB schemas to store persistent chat logs and user profiles with index optimization for fast queries." },
      { num: "03", title: "Dynamic UI", desc: "Coded a responsive chat dashboard in HTML5/CSS3 with interactive state tracking (online/offline tags, typing, join alerts)." }
    ],
    tools: ["Node.js", "Socket.io", "MongoDB", "Express.js", "WebSockets"],
    testimonial: "Personal developer project. Showcased robust handling of asynchronous socket event queues, persistent chats, and mobile-friendly layouts.",
    client: "Krish Patel (Self-Project)",
    outcome: "Successfully deployed server and client-side code; handled 50+ concurrent socket connections without lag or message dropping."
  },
  11: {
    title: "Notification Service System",
    category: "Backend · Microservice",
    isDesign: false,
    gradientClass: "thumb-notification",
    image: null,
    github: "https://github.com/Kris143k/Notification-Service-System",
    brief: "Engineered a fault-tolerant, highly scalable event-driven notification queue backend microservice that automates email and push alerts.",
    process: [
      { num: "01", title: "Message Queue", desc: "Configured RabbitMQ connection exchanges and queue bindings to decouple notification events from main APIs." },
      { num: "02", title: "Event Workers", desc: "Programmed background worker daemons in Node.js to consume events, validate schemas, and trigger REST mail handlers." },
      { num: "03", title: "Monitoring", desc: "Implemented automatic retry mechanisms, dead-letter queues, and query indexing in MongoDB for comprehensive logs." }
    ],
    tools: ["Node.js", "RabbitMQ", "MongoDB", "REST APIs", "System Design", "Docker"],
    testimonial: "Personal developer project. Showcased professional comprehension of message queues, event decoupling, background workers, and horizontal scalability.",
    client: "Krish Patel (Self-Project)",
    outcome: "Production-ready backend microservice. Achieved throughput of 10,000+ notification tasks/minute under stress testing."
  }
};

/* ════════════════════════════════════════════════════════
   CUSTOM CURSOR
════════════════════════════════════════════════════════ */
(function initCursor() {
  if (window.innerWidth < 768) return;
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let rafId;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform  = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  }, { passive: true });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();

  /* Hover state on interactive elements */
  const interactiveSelectors = 'a, button, .project-card, .filter-btn, .service-card, input, select, textarea';
  document.querySelectorAll(interactiveSelectors).forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
  });
})();

/* ════════════════════════════════════════════════════════
   NAVIGATION
════════════════════════════════════════════════════════ */
const navbar       = document.getElementById('navbar');
const navHamburger = document.getElementById('nav-hamburger');
const mobileMenu   = document.getElementById('mobile-menu');
const mobileLinks  = document.querySelectorAll('.mobile-link');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScrollTop = scrollTop;
}, { passive: true });

navHamburger.addEventListener('click', () => {
  navHamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.classList.toggle('overflow-hidden');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    navHamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  });
});

/* ════════════════════════════════════════════════════════
   SCROLL REVEAL (CSS IntersectionObserver fallback)
════════════════════════════════════════════════════════ */
const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

/* ════════════════════════════════════════════════════════
   GSAP SCROLL ANIMATIONS (progressive enhancement)
════════════════════════════════════════════════════════ */
function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  /* ── Section headings slide-in ── */
  gsap.utils.toArray('.section-title').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 48 },
      {
        opacity: 1, y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }
    );
  });

  /* ── Project cards stagger ── */
  gsap.utils.toArray('#project-grid .project-card').forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, y: 60, scale: 0.94 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.75,
        delay: (i % 3) * 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 90%', once: true }
      }
    );
  });

  /* ── Skills columns ── */
  gsap.utils.toArray('.skills-column').forEach((col, i) => {
    gsap.fromTo(col,
      { opacity: 0, x: i === 0 ? -40 : 40 },
      {
        opacity: 1, x: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: { trigger: col, start: 'top 88%', once: true }
      }
    );
  });

  /* ── Experience timeline ── */
  gsap.fromTo('.exp-item',
    { opacity: 0, x: -40 },
    {
      opacity: 1, x: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.exp-item', start: 'top 88%', once: true }
    }
  );

  /* ── Service cards stagger ── */
  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, y: 40, scale: 0.96 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 90%', once: true }
      }
    );
  });

  /* ── Cert cards stagger ── */
  gsap.utils.toArray('.cert-card').forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.65,
        delay: i * 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 92%', once: true }
      }
    );
  });

  /* ── Parallax hero grid ── */
  gsap.to('.hero-grid', {
    yPercent: -30,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  /* ── About avatar float on scroll ── */
  gsap.to('.about-avatar-wrap', {
    yPercent: -8,
    ease: 'none',
    scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: 0.5 }
  });
}

/* Wait for GSAP to be available */
let gsapAttempts = 0;
function tryInitGSAP() {
  if (typeof gsap !== 'undefined') {
    initGSAP();
  } else if (gsapAttempts < 30) {
    gsapAttempts++;
    setTimeout(tryInitGSAP, 200);
  }
}
tryInitGSAP();

/* ════════════════════════════════════════════════════════
   3D CARD TILT EFFECT
════════════════════════════════════════════════════════ */
function initCardTilt() {
  const cards = document.querySelectorAll('.project-card');
  const isMobile = window.innerWidth < 768;
  if (isMobile) return;

  const MAX_TILT = 12; // degrees

  cards.forEach(card => {
    const shine = card.querySelector('.card-shine');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width  / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      const rotY =  dx * MAX_TILT;
      const rotX = -dy * MAX_TILT;

      card.style.transform  = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
      card.style.transition = 'transform 0.05s linear';

      /* Shine follows cursor */
      if (shine) {
        const shineX = (e.clientX - rect.left) / rect.width  * 100;
        const shineY = (e.clientY - rect.top)  / rect.height * 100;
        shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.12) 0%, transparent 55%)`;
      }
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
      card.style.transform  = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      if (shine) shine.style.background = '';
    });

    /* Also accessible via keyboard */
    card.addEventListener('focus', () => {
      card.style.outline = '2px solid var(--accent)';
      card.style.outlineOffset = '3px';
    });
    card.addEventListener('blur', () => {
      card.style.outline = '';
      card.style.outlineOffset = '';
    });
  });
}
initCardTilt();

/* ════════════════════════════════════════════════════════
   MAGNETIC BUTTON EFFECT
════════════════════════════════════════════════════════ */
function initMagneticButtons() {
  if (window.innerWidth < 768) return;
  const MAGNETIC_RANGE = 80;
  const MAGNETIC_STRENGTH = 0.35;

  document.querySelectorAll('.btn-primary, .btn-submit').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MAGNETIC_RANGE) {
        const pullX = dx * MAGNETIC_STRENGTH;
        const pullY = dy * MAGNETIC_STRENGTH;
        btn.style.transform = `translate(${pullX}px, ${pullY}px)`;
      }
    }, { passive: true });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  });
}
initMagneticButtons();

/* ════════════════════════════════════════════════════════
   TEXT SCRAMBLE ANIMATION (Hero heading)
════════════════════════════════════════════════════════ */
function scrambleText(element, finalText, duration = 1200) {
  const chars = '!<>-_\\/[]{}—=+*^?#@ABCDEFabcdef0123456789';
  let frame = 0;
  const totalFrames = Math.round(duration / 16);
  let rafId;

  function update() {
    let output = '';
    const progress = frame / totalFrames;

    for (let i = 0; i < finalText.length; i++) {
      if (finalText[i] === ' ') { output += ' '; continue; }
      if (i < Math.floor(progress * finalText.length)) {
        output += `<span style="color:inherit">${finalText[i]}</span>`;
      } else {
        const r = chars[Math.floor(Math.random() * chars.length)];
        output += `<span style="color:rgba(255,85,0,0.4)">${r}</span>`;
      }
    }

    element.innerHTML = output + (element.querySelector('em') ? '' : '');
    frame++;
    if (frame <= totalFrames) {
      rafId = requestAnimationFrame(update);
    } else {
      element.textContent = finalText;
    }
  }

  rafId = requestAnimationFrame(update);
}

/* Apply scramble to hero tag on load */
const heroTag = document.querySelector('.hero-tag');
if (heroTag) {
  const originalText = heroTag.textContent.trim();
  setTimeout(() => {
    scrambleText(heroTag, originalText, 1000);
  }, 800);
}

/* ════════════════════════════════════════════════════════
   NUMBER COUNTER ANIMATION
════════════════════════════════════════════════════════ */
function animateCounter(el) {
  const target   = parseFloat(el.getAttribute('data-target'));
  const decimals = parseInt(el.getAttribute('data-decimals') || '0');
  const duration = 1600;
  const start    = performance.now();

  function step(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    /* Ease out cubic */
    const ease = 1 - Math.pow(1 - progress, 3);
    const value = target * ease;
    el.textContent = value.toFixed(decimals);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter-val').forEach(el => counterObserver.observe(el));

/* ════════════════════════════════════════════════════════
   PORTFOLIO FILTER
════════════════════════════════════════════════════════ */
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards  = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterValue = btn.getAttribute('data-filter');

    projectCards.forEach((card, i) => {
      const categories = card.getAttribute('data-category') || '';
      let show = false;

      if (filterValue === 'all') {
        show = true;
      } else if (filterValue === 'design') {
        show = categories.includes('design');
      } else if (filterValue === 'dev') {
        show = categories.includes('dev');
      } else {
        show = categories.includes(filterValue);
      }

      if (show) {
        card.classList.remove('hidden');
        /* Staggered re-appear animation */
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = `fade-up 0.4s ${i * 0.04}s both`;
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ════════════════════════════════════════════════════════
   PROJECT MODAL
════════════════════════════════════════════════════════ */
const modalBackdrop        = document.getElementById('modal-backdrop');
const modal                = document.getElementById('modal');
const modalClose           = document.getElementById('modal-close');
const modalContentContainer = document.getElementById('modal-content-container');

function openModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  let heroSection = '';
  if (data.image) {
    heroSection = `<div class="modal-hero"><img src="${data.image}" alt="${data.title}" loading="lazy"></div>`;
  } else {
    heroSection = `<div class="modal-hero modal-hero--gradient ${data.gradientClass}">${data.title}</div>`;
  }

  let processHTML = data.process.map(step => `
    <div class="modal-process-step">
      <div class="step-num">${step.num}</div>
      <h4>${step.title}</h4>
      <p>${step.desc}</p>
    </div>
  `).join('');

  let toolsHTML = data.tools.map(t => `<span>${t}</span>`).join('');

  let ctaHTML = '';
  if (!data.isDesign && data.github) {
    ctaHTML = `
      <div class="modal-cta">
        <a href="${data.github}" class="btn btn-primary" target="_blank" rel="noopener">
          View GitHub Repository
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      </div>`;
  } else {
    ctaHTML = `
      <div class="modal-cta">
        <a href="#contact" class="btn btn-primary" id="modal-hire-btn">Start a Project</a>
      </div>`;
  }

  modalContentContainer.innerHTML = `
    ${heroSection}
    <div class="modal-body">
      <div class="modal-meta">
        <div class="modal-meta-item"><label>Role</label><span>${data.isDesign ? 'Graphic Designer' : 'Software Developer'}</span></div>
        <div class="modal-meta-item"><label>Category</label><span>${data.category}</span></div>
        <div class="modal-meta-item"><label>Year</label><span>2026</span></div>
      </div>
      <div class="modal-section"><h3>Project Brief</h3><p>${data.brief}</p></div>
      <div class="modal-section">
        <h3>Design / Engineering Process</h3>
        <div class="modal-process">${processHTML}</div>
      </div>
      <div class="modal-section"><h3>Project Outcome</h3><p>${data.outcome}</p></div>
      <div class="modal-section">
        <h3>Client Testimonial</h3>
        <blockquote class="modal-testimonial">"${data.testimonial}"<cite>${data.client}</cite></blockquote>
      </div>
      <div class="modal-section">
        <h3>Tools &amp; Tech Stack</h3>
        <div class="modal-tools">${toolsHTML}</div>
      </div>
      ${ctaHTML}
    </div>
  `;

  modalBackdrop.classList.add('active');
  modal.classList.add('active');
  document.body.classList.add('overflow-hidden');
  modal.scrollTop = 0;

  const hireBtn = document.getElementById('modal-hire-btn');
  if (hireBtn) hireBtn.addEventListener('click', closeModal);
}

function closeModal() {
  modalBackdrop.classList.remove('active');
  modal.classList.remove('active');
  document.body.classList.remove('overflow-hidden');
  setTimeout(() => { modalContentContainer.innerHTML = ''; }, 400);
}

/* Wire card clicks + keyboard */
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    openModal(card.getAttribute('data-project-id'));
  });
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(card.getAttribute('data-project-id'));
    }
  });
});

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    navHamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  }
});

/* ════════════════════════════════════════════════════════
   CONTACT FORM
════════════════════════════════════════════════════════ */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name    = document.getElementById('form-name').value.trim();
    const email   = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      /* Shake invalid fields */
      [document.getElementById('form-name'), document.getElementById('form-email'), document.getElementById('form-message')]
        .filter(el => !el.value.trim())
        .forEach(el => {
          el.style.borderColor = '#ff4444';
          el.style.animation = 'none';
          el.offsetHeight;
          el.style.animation = 'shake 0.4s ease';
          setTimeout(() => { el.style.borderColor = ''; el.style.animation = ''; }, 1000);
        });
      return;
    }

    const btn = document.getElementById('form-submit-btn');
    if (btn) {
      btn.textContent = 'Sending…';
      btn.disabled = true;
    }

    try {
      const formData = new FormData(contactForm);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        const container = contactForm.parentElement;
        container.innerHTML = `
          <div style="text-align:center; padding: 60px 24px; color: var(--text-primary);">
            <div style="font-size: 64px; margin-bottom: 24px; animation: float 3s ease-in-out infinite;">✨</div>
            <h3 style="font-family: var(--font-display); font-size: 30px; margin-bottom: 16px; background: linear-gradient(135deg, var(--accent), var(--cyan)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Thank you, ${name}!</h3>
            <p style="color: var(--text-secondary); max-width: 340px; margin: 0 auto 36px; font-size: 15px; line-height: 1.7;">Your inquiry has been received. I'll review your project brief and get back to you at <strong style="color: var(--accent);">${email}</strong> within 24 hours.</p>
            <button onclick="window.location.reload()" class="btn btn-primary" style="margin: 0 auto;">Send Another Inquiry</button>
          </div>
        `;
      } else {
        if (btn) {
          btn.textContent = 'Send Message';
          btn.disabled = false;
        }
        alert('Something went wrong. Please try again or email me directly at krishpatel98450@gmail.com');
      }
    } catch (err) {
      if (btn) {
        btn.textContent = 'Send Message';
        btn.disabled = false;
      }
      alert('Network error. Please try again or email me directly at krishpatel98450@gmail.com');
    }
  });
}


/* ════════════════════════════════════════════════════════
   SERVICE CARD HOVER TILT (lighter version)
════════════════════════════════════════════════════════ */
document.querySelectorAll('.service-card').forEach(card => {
  if (window.innerWidth < 768) return;
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2);
    const dy = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);
    card.style.transform = `translateY(-8px) perspective(600px) rotateX(${-dy * 5}deg) rotateY(${dx * 5}deg)`;
  }, { passive: true });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ════════════════════════════════════════════════════════
   SHAKE KEYFRAME (injected for form validation)
════════════════════════════════════════════════════════ */
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%  { transform: translateX(-8px); }
    40%  { transform: translateX(8px); }
    60%  { transform: translateX(-5px); }
    80%  { transform: translateX(5px); }
  }
  @keyframes fade-up {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(shakeStyle);

/* ════════════════════════════════════════════════════════
   ACTIVE NAV LINK HIGHLIGHT ON SCROLL
════════════════════════════════════════════════════════ */
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.removeAttribute('aria-current');
        link.style.color = '';
        if (link.getAttribute('href') === `#${id}`) {
          link.setAttribute('aria-current', 'page');
          link.style.color = 'var(--accent)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => sectionObserver.observe(sec));
