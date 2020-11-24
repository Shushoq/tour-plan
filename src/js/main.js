// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.menu');
// const closeElem = document.querySelector('.menu__close');

// burger.addEventListener('click', () => {
//   menu.classList.add('menu_active');
// })

// closeElem.addEventListener('click', () => {
//   menu.classList.remove('menu_active');
// })
import Swiper, {
  Navigation,
  Pagination
} from "swiper";
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".hotel__slider", {
  loop: true,
  speed: 500,
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
