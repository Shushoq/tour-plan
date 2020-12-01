const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.nav');
const search = document.querySelector('.header__search');
const user = document.querySelector('.header__user');

burger.addEventListener('click', () => {
  menu.classList.toggle('nav--active')
  search.classList.toggle('header__search--active')
  user.classList.toggle('header__user--active')
})

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
