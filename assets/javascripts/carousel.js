$(document).ready(function() {
  $('.cover-slider').owlCarousel({
    loop:true,
    items: 1,
    nav: true,
    navText: ['<div class="left-arrow"></div>','<div class="right-arrow"></div>']
  });

  $('.history-slider').owlCarousel({
    loop:false,
    nav: true,
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
    navText: ['<div class="flat-left"></div>','<div class="flat-right"></div>']
  });
});
