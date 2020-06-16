document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('.splide', {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    arrows: false,
  }).mount();
});
