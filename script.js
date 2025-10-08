// ====== THEME TOGGLE + PERSISTENCE ======
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Load saved theme from localStorage or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.classList.toggle('light', savedTheme === 'light');
} else {
  // Default to dark if no preference saved
  root.classList.remove('light');
}

// Handle toggle button click
themeToggle.addEventListener('click', () => {
  root.classList.toggle('light');
  const isLight = root.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');

  // Toggle icon (🌙 / 🌞)
  themeToggle.textContent = isLight ? '🌙' : '🌞';
});

// ====== SCROLL REVEAL ANIMATIONS ======
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((el) => revealOnScroll.observe(el));

// ====== PARALLAX HERO BACKGROUND ======
const hero = document.querySelector('.hero');

if (hero) {
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    // Adjust background position for subtle parallax
    hero.style.backgroundPositionY = `${scrollPos * 0.3}px`;
  });
}

// ====== REDUCE MOTION SUPPORT ======
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.reveal').forEach((el) => {
    el.classList.add('visible');
  });
}
