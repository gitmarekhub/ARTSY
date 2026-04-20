"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("renders-gallery");
  if (!gallery) return;

  const pswpEl = document.querySelector(".pswp");
  if (!pswpEl) return;

  function openLightbox(imgs, startIndex) {
    const items = imgs.map((img) => ({
      src: img.src,
      w: img.naturalWidth || 1200,
      h: img.naturalHeight || 1600,
      title: img.alt || "",
    }));

    const pswp = new PhotoSwipe(pswpEl, PhotoSwipeUI_Default, items, {
      index: startIndex,
      bgOpacity: 0.95,
      showHideOpacity: true,
      closeOnScroll: false,
      maxSpreadZoom: 4,
      showAnimationDuration: 200,
      hideAnimationDuration: 200,
    });
    pswp.init();
  }

  // All projects grid – klik na img
  const gridImgs = Array.from(gallery.querySelectorAll("img"));

  gridImgs.forEach((img, i) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      // Pokud rozměry ještě nejsou načtené, počkej
      if (img.naturalWidth === 0) {
        img.onload = () => openLightbox(gridImgs, i);
      } else {
        openLightbox(gridImgs, i);
      }
    });
  });

  // Selected projects – klik na img v .project__image
  document.querySelectorAll(".project__image img").forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      const items = [
        {
          src: img.src,
          w: img.naturalWidth || 1200,
          h: img.naturalHeight || 1600,
          title: img.alt || "",
        },
      ];
      const pswp = new PhotoSwipe(pswpEl, PhotoSwipeUI_Default, items, {
        index: 0,
        bgOpacity: 0.95,
        showHideOpacity: true,
        showAnimationDuration: 200,
        hideAnimationDuration: 200,
      });
      pswp.init();
    });
  });
});
