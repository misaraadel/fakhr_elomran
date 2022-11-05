"use strict";

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".scroll-top-button").fadeIn();
    } else {
      $(".scroll-top-button").fadeOut();
    }
  });
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  $(".scroll-top-button").on('click', function () {
    $('html , body').animate({
      scrollTop: 0
    }, 100);
  });
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('active');
    $('.navbar-nav').toggleClass('active-nav');
    $('body').toggleClass('overflowNone');
  });
  var swiper = new Swiper(".headerSwiper", {
    grabCursor: true,
    effect: "creative",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    scrollbar: {
      el: ".swiper-scrollbar"
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1]
      },
      next: {
        translate: ["100%", 0, 0]
      }
    }
  });
  var swiper = new Swiper(".service-swiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10
      }
    }
  });
});