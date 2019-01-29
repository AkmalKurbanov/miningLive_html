$(document).ready(function () {

  //   slider

  // news slider
  var swiper = new Swiper('.sliderNews-js', {
    slidesPerView: 3,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1199: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    }
  });
  // news slider end

  //  projects slider
  var swiper = new Swiper('.sliderProjects-js', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      991: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    }
  });
  //  projects slider end

  //   slider end




  // hamburger
  $('.hamburger').click(function () {
    $(this).toggleClass('openClose');
    $('.mnu-js').toggleClass('mobileMnu-js');
    $('.hamburger__line').toggleClass('lineBg');
  });

  $('.mnu-js').click(function () {
    $(this).removeClass('mobileMnu-js');
    $('.hamburger').removeClass('openClose');
    $('.hamburger__line').removeClass('lineBg');
  });
  // hamburger end



  // scroll button
  function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 700);
  }
  $('[data-scroll]').on('click', scrollToSection);
  // scroll button end







  // button up 
  jQuery(function (f) {
    var element = f('.scrolltop');
    f(window).scroll(function () {
      element['fade' + (f(this).scrollTop() > 220 ? 'In' : 'Out')](500);
    });
  });
  $('.scrolltop').click(function () {
    $('body,html').animate({
      scrollTop: 0,
    }, 800);
    return false;
  });
  // button up end












});
