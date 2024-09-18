$(document).ready(function () {

  // Header height
  function headerHieght() {
    var headerHieght = $('.header').outerHeight(true);
    $('.wrapper').css('padding-top', headerHieght);
  }
  headerHieght();

  $(window).resize(function() {
    headerHieght();
  });

  // Menu mobail
  $('.navbar-toggle--open').on('click', function() {
    $('.header__data').slideDown( 200, function() {});
  });

  $('.navbar-toggle--close').on('click', function() {
    $('.header__data').slideUp( 200, function() {});
  });

   // Modal
  $('.open-modal-feedback').on('click', function(e) {
    e.preventDefault();
    $('.modal--feedback').fadeIn(200);
  });

  $('.modal__close').on('click', function() {
    $('.modal').fadeOut(200);
  });

  $('.modal').mouseup(function (e) {
    let modalContent = $(".modal__box");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).fadeOut(200);
    }
  });

  // Maskedinput
  $(function($){
    $('.phone-mask').mask(('+7 ') + '(999) 999-99-99');
  });

  // Accardion
  var accordion = function() {
    $('.accordion__head').on('click', function(){
      $(this).next('.accordion__body').not(':animated').slideToggle()
    })
    $('.accordion__head').click(function () {
      $(this).parent('.accordion li').toggleClass('active');
    });
  }
  accordion();

  // Hero
  var swiper = new Swiper(".hero", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Stock
  var swiper = new Swiper(".stock__sl", {
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      }
    },
  });

});