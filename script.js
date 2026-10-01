const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const mediaCards = document.querySelectorAll('.media-frame');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && 'IntersectionObserver' in window) {
  const mediaObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const card = entry.target;
      const video = card.querySelector('.project-video');
      if (!video) return;

      if (entry.isIntersecting) {
        if (!video.src) video.src = video.dataset.src;
        video.play().then(() => card.classList.add('is-playing')).catch(() => {});
      } else {
        video.pause();
        card.classList.remove('is-playing');
      }
    });
  }, { rootMargin: '160px 0px', threshold: 0.2 });

  mediaCards.forEach((card) => mediaObserver.observe(card));
} else {
  mediaCards.forEach((card) => card.classList.add('no-video'));
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const selector = link.getAttribute('href');
    const target = document.querySelector(selector);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  });
});
