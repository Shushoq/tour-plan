import Swiper from 'swiper'
import Inputmask from 'inputmask'
import JustValidate from "../../node_modules/just-validate/dist/js/just-validate"
import AOS from 'aos'
// import './just-validate'

document.addEventListener('DOMContentLoaded', function () {

  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.nav');
  const bodyScroll = document.querySelector('.body')

  burger.addEventListener('click', () => {
    menu.classList.toggle('nav--active')
    bodyScroll.classList.toggle('nav__open')
  })

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
    preloadImages: false,
    lazy: true,
  });



  let tel = document.querySelectorAll('input[type=tel')
  let telMask = new Inputmask("+7 (999) 999-99-99");
  telMask.mask(tel);

  function validateForms(selector, rules, messages) {
    new window.JustValidate(selector, {
      rules: rules,
      messages: {
        tel: {
          strength: 'Enter the correct phone number',
          required: 'Enter your phone number'
        },
        name: {
          required: 'Enter your name',
          minLength: 'The name must not be less than 2 letters'
        },
        email: 'Please enter a valid email'
      },
      submitHandler: function (form, values, ajax) {
        let formData = new FormData(form);

        fetch("sendmail.php", {
            method: "POST",
            body: formData
          })
          .then(function (data) {
            form.reset();
            if (selector === ".subscribe__form") {
              document.location.assign("subscribe.html")
            } else {
              document.location.assign("thanks.html")
            }
          });
      }
    });
  }

  let modalForm = document.querySelector('.modal__form');
  let subscribeForm = document.querySelector('.subscribe__form');

  if (modalForm) {
    validateForms('.modal__form', {
      email: {
        required: true,
        email: true
      },
      name: {
        required: true,
        minLength: 2,
      },
      tel: {
        required: true,
        strength: {
          custom: '[^_]$'
        },
      },
    });
  }

  validateForms('.footer__form', {
    name: {
      required: true,
      minLength: 2,
    },
    tel: {
      required: true,
      strength: {
        custom: '[^_]$'
      },
    },
  });

  if (subscribeForm) {
    validateForms('.subscribe__form', {
      email: {
        required: true,
        email: true
      }
    });
  }



  const maps = document.querySelector('.hotel__map')
  maps.addEventListener('mouseover', (event) => {
    let target = event.target
    target.innerHTML = `<iframe class="hotel__map-frame"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7500.746811551891!2d-122.42303962194119!3d37.774205101819256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580a196ede719%3A0x2fb5607634331f2f!2zSGF5ZXMgVmFsbGV5LCDQodCw0L0t0KTRgNCw0L3RhtC40YHQutC-LCDQmtCw0LvQuNGE0L7RgNC90LjRjyA5NDEwMiwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1606217945560!5m2!1sru!2sru"
  style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
  })

  const modalDialog = document.querySelector('.modal__dialog')
  const modalOverlay = document.querySelector('.modal__overlay')
  const close = document.querySelector('.modal__close')
  const modalToggle = document.querySelectorAll('[data-toggle=modal]')

  modalToggle.forEach(el => {
    el.addEventListener('click', modalOpen)
  })

  function modalClose() {
    modalDialog.classList.remove('modal__dialog--active')
    modalOverlay.classList.remove('modal__overlay--active')
    bodyScroll.classList.remove('modal__open')
    let resetForm = document.querySelector('.modal__form')
    resetForm.reset()
  }

  function modalOpen() {
    modalDialog.classList.add('modal__dialog--active')
    modalOverlay.classList.add('modal__overlay--active')
    bodyScroll.classList.add('modal__open')
  }

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

  AOS.init({
    easing: 'ease-in-sine',
  });
})
