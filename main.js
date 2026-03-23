/* =============================================
   PARADI HEMANTH KUMAR — PORTFOLIO JAVASCRIPT
   ============================================= */

// ===== FLOATING PARTICLES =====
(function () {
  const container = document.getElementById('particles');
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (8 + Math.random() * 12) + 's';
    p.style.animationDelay = (-Math.random() * 15) + 's';
    p.style.setProperty('--drift', (Math.random() - 0.5) * 2);
    container.appendChild(p);
  }
})();

// ===== ENTRY SCREEN → PORTFOLIO =====
function enterPortfolio() {
  const entry = document.getElementById('entry-screen');
  entry.classList.add('entry-screen-exit');

  setTimeout(() => {
    entry.style.display = 'none';
    const main = document.getElementById('main-content');
    main.style.display = 'block';
    main.style.animation = 'fadeIn 0.8s ease';

    // Init features after entry
    initReveal();
    initTyping();
  }, 650);
}

// ===== TYPING ANIMATION =====
function initTyping() {
  const lines = [
    'Data Science Enthusiast',
    'ML Engineer',
    'Software Developer',
    'B.Tech CSE @ LPU'
  ];
  let lineIndex = 0, charIndex = 0, deleting = false;
  const el = document.getElementById('typing-text');

  function tick() {
    const current = lines[lineIndex];
    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 75);
  }
  tick();
}

// ===== SCROLL REVEAL =====
function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  elements.forEach((el) => observer.observe(el));
}

// ===== BACK TO TOP BUTTON =====
window.addEventListener('scroll', () => {
  const btn = document.getElementById('back-top');
  btn.classList.toggle('show', window.scrollY > 300);
});

// ===== HAMBURGER NAV =====
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close nav on link click (mobile)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-links a').forEach((a) => {
    a.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });
});
