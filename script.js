/* script.js
   - theme toggle with persistence
   - mobile sidebar toggling + hide-on-scroll behavior
   - scroll reveal (IntersectionObserver)
   - parallax for hero video
*/

(() => {
  /* ---------- theme persistence ---------- */
  const root = document.documentElement;
  const body = document.body;
  const themeBtn = document.getElementById('themeBtn') || document.getElementById('themeBtn');
  // prefer data-theme on body for CSS
  const saved = localStorage.getItem('ts_theme');
  if (saved) body.setAttribute('data-theme', saved);
  else {
    const prefers = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    body.setAttribute('data-theme', prefers === 'light' ? 'light' : '');
  }

  const themeToggleBtn = document.getElementById('themeBtn') || document.getElementById('themeBtn');
  const themeBtnMobile = document.getElementById('themeBtn');
  const themeBtnAlt = document.getElementById('themeBtn');
  const btn = document.getElementById('themeBtn') || document.getElementById('themeBtn');

  function updateThemeIcon(){
    const current = body.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const el = document.getElementById('themeBtn') || document.querySelector('.theme-btn') || document.getElementById('themeBtn');
    if(el) el.textContent = current === 'light' ? '🌙' : '🌞';
  }
  updateThemeIcon();

  // attach listener (topbar and desktop usage share same button id)
  const themeButtons = document.querySelectorAll('#themeBtn, .theme-btn, #themeBtn');
  themeButtons.forEach(b => b.addEventListener('click', () => {
    const now = body.getAttribute('data-theme') === 'light' ? '' : 'light';
    if (now === 'light') body.setAttribute('data-theme', 'light');
    else body.removeAttribute('data-theme');
    localStorage.setItem('ts_theme', now === 'light' ? 'light' : 'dark');
    updateThemeIcon();
  }));

  /* ---------- hamburger & mobile sidebar ---------- */
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  let mobileOpen = false;
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      mobileOpen = !mobileOpen;
      if (mobileOpen) {
        sidebar.style.transform = 'translateX(0)';
        sidebar.style.boxShadow = 'rgba(0,0,0,0.4) 0 10px 30px';
      } else {
        sidebar.style.transform = '';
        sidebar.style.boxShadow = '';
      }
    });
  }

  /* hide on scroll behavior for mobile: when user scrolls down hide topbar, show on up */
  let lastScroll = window.scrollY;
  window.addEventListener('scroll', () => {
    const topbar = document.querySelector('.topbar');
    const current = window.scrollY;
    if (window.innerWidth < 920 && topbar) {
      if (current > lastScroll && current > 120) topbar.style.transform = 'translateY(-100%)';
      else topbar.style.transform = 'translateY(0)';
    }
    lastScroll = current <= 0 ? 0 : current;
  });

  /* ---------- intersection observer: reveal ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const ro = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('visible');
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.18 });
    reveals.forEach(r => ro.observe(r));
  } else {
    // fallback
    reveals.forEach(r => r.classList.add('visible'));
  }

  /* ---------- parallax: hero video ---------- */
  const heroVideo = document.querySelector('.hero-video');
  const hero = document.getElementById('hero');
  if (heroVideo && hero) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = hero.getBoundingClientRect();
          // positive when scrolled past top; negative when above
          const offset = Math.max(0, -rect.top);
          // translate factor
          const y = offset * 0.25;
          heroVideo.style.transform = `translateY(${y}px) scale(1.06)`;
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /* ---------- contact form simple handler (demo) ---------- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // For prototype we simply show a success message
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Sending...';
      setTimeout(() => {
        btn.textContent = 'Sent!';
        btn.style.background = 'linear-gradient(180deg,#2bb2ff,#1b7bd6)';
        form.reset();
        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = 'Send Message';
        }, 2200);
      }, 900);
    });
  }

  /* set year in footer */
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

})();
