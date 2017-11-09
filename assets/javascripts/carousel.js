$(document).ready(function() {
  $('.cover-slider').owlCarousel({
    loop:true,
    items: 1,
    nav: true,
    navText: ['<div class="left-arrow"></div>','<div class="right-arrow"></div>'],
    onChanged: callback
  });

  $('.history-slider').owlCarousel({
    loop:false,
    nav: true,
    dots: false,
    navText: ['<div class="flat-left"></div>','<div class="flat-right"></div>'],
    responsive: {
      0: {
        items: 1,
        slideBy: 1
      },
      600: {
        items: 2,
        slideBy: 2
      },
      768: {
        items: 3,
        slideBy: 3
      },
      992: {
        items: 4,
        slideBy: 2
      }
    }
  });

  $('.values-slider').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    dots: false,
    navText: ['<div class="flat-left"></div>','<div class="flat-right"></div>']
  });

  $('.rip-slider').owlCarousel({
    loop: false,
    items: 1,
    nav: false,
    dots: true,
    mouseDrag: false,
    touchDrag: false,
    animateOut: 'fadeOut'
  });

  countDots();
});

function countDots() {
  $('.owl-dot').each(function(i) {
    $(this).addClass('dot-' + (i+1));
  });
}

function callback(event) {
  var item = event.item.index;
  var prev = $('.owl-prev');
  var next = $('.owl-next');

  switch (item) {
    case 0:
      $(prev).css('background-color', '#844A16');
      $(next).css('background-color', '#88D43B');
      break;
    case 3:
      $(prev).css('background-color', '#D48D4D');
      $(next).css('background-color', '#28AC01');
      break;
    case 4:
      $(prev).css('background-color', '#844A16');
      $(next).css('background-color', '#88D43B');
      break;
    case 5:
      $(prev).css('background-color', '#28AC01');
      $(next).css('background-color', '#BBD43B');
      break;
    case 6:
      $(prev).css('background-color', '#88D43B');
      $(next).css('background-color', '#F1C319');
      break;
    case 7:
      $(prev).css('background-color', '#BBD43B');
      $(next).css('background-color', '#F15733');
      break;
    case 8:
      $(prev).css('background-color', '#F1C319');
      $(next).css('background-color', '#D48D4D');
      break;
    case 9:
      $(prev).css('background-color', '#F15733');
      $(next).css('background-color', '#844A16');
      break;
    case 10:
      $(prev).css('background-color', '#D48D4D');
      $(next).css('background-color', '#28AC01');
      break;
    default:
      $(prev).css('background-color', '#844A16');
      $(next).css('background-color', '#88D43B');
  }
}
