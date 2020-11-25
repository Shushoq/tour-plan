// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.menu');
// const closeElem = document.querySelector('.menu__close');

// burger.addEventListener('click', () => {
//   menu.classList.add('menu_active');
// })

// closeElem.addEventListener('click', () => {
//   menu.classList.remove('menu_active');
// })
import Swiper from "swiper";


const hotelSwiper = new Swiper(".hotel__slider", {
  loop: true,
  speed: 300,
  effect: 'fade',
  fade: {
    crossFade: true
  },
  navigation: {
    nextEl: ".hotel__slider-btn--next",
    prevEl: ".hotel__slider-btn--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});

const reviewsSwiper = new Swiper(".reviews__slider", {
  loop: true,
  speed: 300,
  navigation: {
    nextEl: ".reviews__slider-btn--next",
    prevEl: ".reviews__slider-btn--prev",
  },
});
