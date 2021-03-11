const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  // Keyboard Control
    keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // Effect for slides
  effect: 'coverflow',
});