$(function () {

  $('.carusel__thumb').slick({
    asNavFor: '.carusel__big',
    focusOnSelect: true,
    slidesToShow: 4,
    draggable: false,
  });
  $('.carusel__big').slick({
    asNavFor: '.carusel__thumb',
    draggable: false,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="9px" height="15px" > <path fill="" d="M8.314,13.331 L6.728,15.0 L0.0,7.919 L0.398,7.500 L0.0,7.81 L6.728,0.0 L8.314,1.669 L2.773,7.500 L8.314,13.331 Z" /></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="9px" height="15px" > <path fill="" d="M8.999,7.919 L2.271,15.0 L0.685,13.331 L6.226,7.500 L0.685,1.669 L2.271,0.0 L8.999,7.81 L8.602,7.500 L8.999,7.919 Z" /></svg></button>',
    responsive: [
      {
        breakpoint: 760,
        settings: {
          arrows: false
        }
      },


      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  window.onscroll = function () { myFunction() };

  let header = document.getElementById("nav");

  let sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      $('.main').css({ 'padding-top': '160px' });
    } else {
      header.classList.remove("sticky");
      $('.main').css({ 'padding-top': '0px' });
    }
  }

  $('.menu__btn, .nav__link').on('click', function () {
    $('.nav').toggleClass('nav--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  $('.btn__search').on('click', function () {
    $('.header__top-form').toggleClass('header__top-form--active');
    $('.btn__search').toggleClass('btn__search--active');
  });


  function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
  }

  if (getWindowWidth() <= 440) {
    $('.footer-more__list, .footer-about__list, .footer-shop__list').toggle();

    $('.footer__more-title').on('click', function () {
      $('.footer-more__list').slideToggle(500);
      $('.footer__more-title').toggleClass('footer__more-title--active')
    });

    $('.footer__shop-title').on('click', function () {
      $('.footer-shop__list').slideToggle(500);
      $(this).toggleClass('footer__shop-title--active')
    });

    $('.footer__about-title').on('click', function () {
      $('.footer-about__list').slideToggle(500);
      $(this).toggleClass('footer__about-title--active')
    });
  }



});

