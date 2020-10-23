$(document).ready(function () {
  $('.app-screens__slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    appendDots: $('.app-screens__dots'),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 426,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.burger').click(function (event) {
    $('.burger,.header__nav').toggleClass('open');
    $('body').toggleClass('non-scroll');
  });
});