// меню
document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});
})

const btns = document.querySelectorAll(".bottom-box__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener('click', function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})
// слайдер
new Swiper('.gallery__swiper', {
  loop: true,
  loopFillGroupWithBlank: true,

  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
     firstSlideMessage: 'Первый слайд',
    nextSlideMessage: 'Слайд {{index}}',
    lastSlideMessage: 'Последний слайд',
    paginationBulletMessage: 'Переход к слайду {{index}}',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 38,
      slidesPerGroup: 1,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 38,
      slidesPerGroup: 2,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  }
});
new Swiper('.event__swiper', {
  loop: true,
  loopFillGroupWithBlank: true,

  pagination: {
    el: '.event__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    paginationBulletMessage: 'Переход к слайду {{index}}',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  }
});
new Swiper('.projects__swiper', {
  loop: true,

  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    firstSlideMessage: 'Первый слайд',
    nextSlideMessage: 'Слайд {{index}}',
    lastSlideMessage: 'Последний слайд',
    paginationBulletMessage: 'Переход к слайду {{index}}',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  }
});

// tabs
let tabsBtn = document.querySelectorAll('.accordion-bottom__btn');
let tabsItem = document.querySelectorAll('.catalog__card');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;
    tabsBtn.forEach(function(btn) {
      btn.classList.remove('accordion-bottom__btn--active')

    });

      e.currentTarget.classList.add('accordion-bottom__btn--active');


      tabsItem.forEach(function(element) {
        element.classList.remove('catalog__card--active')
     });
     document.querySelector(`[data-target="${path}"]`).classList.add('catalog__card--active');
  });
});
// accordion
$( function() {
  $( ".accordion-list" ).accordion({
     icons: false,
     heightStyle: "content",
     collapsible: true,
     active: false
   });
 } );
// choices
 document.addEventListener("DOMContentLoaded", function() {
  const selector = document.querySelector(".choices")
  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices header_choices',
     },
  });
});
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
  function init(){
// Создание карты.
    var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.75846806898367,37.60108849999989],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15,

  });
    var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map_point.png',

    iconImageSize: [20, 20],
  });
  // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
  // Отключение скролла
    myMap.behaviors.disable('scrollZoom');
}
//
let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")
im.mask(phone);
new window.JustValidate('.js-form', {
  colorWrong: '#D11616',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    phone: {
      required: true,
      function: (name, value) => {
        const ph = phone.inputmask.unmaskedvalue();
        return Number(ph) && ph.length === 10;
      }
    },
  },
  messages: {
    name: "Вы не ввели имя",
    phone: {
      required: "Вы не ввели телефон",
      function: "Недопустимый формат"
    }
  }
});
// бургер-меню
document.querySelector(".header__burger").addEventListener("click", function() {
  document.querySelector(".header__top-content").classList.add("active");
})
document.querySelector(".header__close").addEventListener("click", function() {
  document.querySelector(".header__top-content").classList.remove("active");
})
// поиск
document.querySelector(".header__btn-search").addEventListener("click", function() {
  document.querySelector(".header__form-mobile").classList.add("active");
})
document.querySelector(".mobile-close").addEventListener("click", function() {
  document.querySelector(".header__form-mobile").classList.remove("active");
})

// modal
const modal = document.querySelector('.overlay')
const modalClose = document.querySelector('.modal__close')
const gallerswiperButton = document.querySelectorAll('.gallery__swiper-slide')


gallerswiperButton.forEach((el) => {
  el.addEventListener('click', () => {
    modal.classList.add('show');
  })
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('show');
})

