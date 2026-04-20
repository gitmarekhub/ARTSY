"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".playground-grid");
  if (!grid) return;

  const pswpEl = document.querySelector(".pswp");
  if (!pswpEl) return;

  const imgs = Array.from(grid.querySelectorAll("img"));

  imgs.forEach((img, i) => {
    img.addEventListener("click", () => {
      const items = imgs.map((el) => ({
        src: el.src,
        w: el.naturalWidth || 1200,
        h: el.naturalHeight || 1600,
      }));

      const pswp = new PhotoSwipe(pswpEl, PhotoSwipeUI_Default, items, {
        index: i,
        bgOpacity: 0.95,
        showHideOpacity: true,
        closeOnScroll: false,
        maxSpreadZoom: 4,
        showAnimationDuration: 200,
        hideAnimationDuration: 200,
      });
      pswp.init();
    });
  });
});
