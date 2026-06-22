const swiper = new Swiper(".carrossel", {
  loop: true,

  slidesPerView: 3,
  spaceBetween: 20,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },

    768: {
      slidesPerView: 2
    },

    1100: {
      slidesPerView: 3
    }
  }
});