'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('site-header');
  if (!header) return;

  header.classList.remove('hidden');

  // Hide on scroll POUZE na desktopu
  const isDesktop = () => window.innerWidth > 990;

  let lastY = window.scrollY;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    header.classList.toggle('scrolled', y > 10);

    if (isDesktop()) {
      if (y > lastY && y > 80) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
    } else {
      // Na mobilu nikdy neschovávej
      header.classList.remove('hidden');
    }

    lastY = y;
  }, { passive: true });
});
