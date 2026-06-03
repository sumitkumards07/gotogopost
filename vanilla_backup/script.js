/* ========================================
   GoTogo Post — Interactive JavaScript
   3D Tilt, Scroll Reveals, Counter Animation,
   Navbar & Mobile Menu
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ── Navbar Scroll Effect ──
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  function handleNavScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ── Mobile Menu Toggle ──
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── Smooth Scroll for Anchor Links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // ── Scroll Reveal (IntersectionObserver) ──
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-stagger'
  );

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ── Animated Counter ──
  const counters = document.querySelectorAll('[data-count]');
  let countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;

    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'), 10);
      const duration = 2000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(eased * target);
        counter.textContent = currentValue;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  const statsSection = document.getElementById('stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    statsObserver.observe(statsSection);
  }

  // ── 3D Tilt Effect ──
  // Only apply on devices that likely have a mouse (non-touch primary)
  const prefersHover = window.matchMedia('(hover: hover)').matches;

  function applyTilt(element, intensity = 10) {
    if (!prefersHover) return;

    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -intensity;
      const rotateY = ((x - centerX) / centerX) * intensity;

      element.style.transform =
        `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    element.addEventListener('mouseleave', () => {
      element.style.transform =
        'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      element.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    element.addEventListener('mouseenter', () => {
      element.style.transition = 'transform 0.1s ease-out';
    });
  }

  // Apply tilt to hero image
  const heroTilt = document.getElementById('heroTilt');
  if (heroTilt) applyTilt(heroTilt, 8);

  // Apply tilt to about card
  const aboutTilt = document.getElementById('aboutTilt');
  if (aboutTilt) applyTilt(aboutTilt, 6);

  // Apply tilt to phone mockup
  const phoneTilt = document.getElementById('phoneTilt');
  if (phoneTilt) applyTilt(phoneTilt, 5);

  // Apply tilt to service cards
  document.querySelectorAll('.service-card.tilt-card').forEach(card => {
    applyTilt(card, 7);
  });

  // ── Parallax on Hero Floating Elements ──
  if (prefersHover) {
    const heroSection = document.querySelector('.hero');
    const floatElements = document.querySelectorAll('.hero-float-element');

    if (heroSection && floatElements.length > 0) {
      heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        floatElements.forEach((el, i) => {
          const depth = (i + 1) * 15;
          const moveX = x * depth;
          const moveY = y * depth;
          el.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
      });
    }
  }

  // ── Dynamic Year in Footer ──
  const yearEl = document.querySelector('.footer-bottom p');
  if (yearEl) {
    const currentYear = new Date().getFullYear();
    yearEl.innerHTML = yearEl.innerHTML.replace('2026', currentYear);
  }
});
