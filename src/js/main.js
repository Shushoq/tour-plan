const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.nav');
// const search = document.querySelector('.header__search');
// const user = document.querySelector('.header__user');

burger.addEventListener('click', () => {
  menu.classList.toggle('nav--active')
  // search.classList.toggle('header__search--active')
  // user.classList.toggle('header__user--active')
})

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
  preloadImages: false,
  lazy: true,
});

const reviewsSwiper = new Swiper(".reviews__slider", {
  loop: true,
  speed: 300,
  navigation: {
    nextEl: ".reviews__slider-btn--next",
    prevEl: ".reviews__slider-btn--prev",
  },
  autoHeight: true,
});


function send(event, php) {
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  let req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
      json = JSON.parse(this.response);
      console.log(json);
      if (json.result == "success") {
        alert("Сообщение отправлено");
      } else {
        alert("Ошибка. Сообщение не отправлено");
      }
    } else {
      alert("Ошибка сервера. Номер: " + req.status);
    }
  };
  req.onerror = function () {
    alert("Ошибка отправки запроса");
  };
  req.send(new FormData(event.target));
}


const maps = document.querySelector('.hotel__map')
maps.addEventListener('click', () => {
  maps.innerHTML = `<iframe class="hotel__map-frame"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7500.746811551891!2d-122.42303962194119!3d37.774205101819256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580a196ede719%3A0x2fb5607634331f2f!2zSGF5ZXMgVmFsbGV5LCDQodCw0L0t0KTRgNCw0L3RhtC40YHQutC-LCDQmtCw0LvQuNGE0L7RgNC90LjRjyA5NDEwMiwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1606217945560!5m2!1sru!2sru"
  style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
})

const modalDialog = document.querySelector('.modal__dialog')
const modalOverlay = document.querySelector('.modal__overlay')
const close = document.querySelector('.modal__close')
// const modalToggle = document.querySelector('[data-toggle=modal]')
const bodyScroll = document.querySelector('.body')

const modalToggle = document.querySelectorAll('[data-toggle=modal]')
modalToggle.forEach(el => {
  el.addEventListener('click', modalOpen)
})

function modalClose() {
  modalDialog.classList.remove('modal__dialog--active')
  modalOverlay.classList.remove('modal__overlay--active')
  bodyScroll.classList.remove('modal__open')
}

function modalOpen() {
  modalDialog.classList.add('modal__dialog--active')
  modalOverlay.classList.add('modal__overlay--active')
  bodyScroll.classList.add('modal__open')
}

// modalToggle.addEventListener('click', () => {
//   modalOpen()
// })

close.addEventListener('click', () => {
  modalClose()
})

window.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    modalClose()
  }
})

modalOverlay.addEventListener('click', () => {
  modalClose()
})
