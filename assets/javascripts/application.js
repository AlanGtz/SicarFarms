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

$(document).ready(function() {
  goToCeiling();
});

function goToCeiling() {
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .click(function(event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600, 'easeOutCirc', function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
}

$(document).ready(function() {
  setHeight();
});

$(window).on('resize',function() {
  setHeight();
});

function setHeight() {
  var pHeight = $('.hero-paragraph').outerHeight();
  var bottom = 0;

  if ($(window).width() >= 992) {
    bottom = (pHeight/2)+30;

    $('.hero-wrapper').css('bottom', -bottom);
  } else {
  	bottom = pHeight;
  	$('.hero-wrapper').css('bottom', -bottom);
  	$('.hero').css('margin-bottom', bottom);
  }
}

$(document).ready(function() {
  openMenu();
});

function openMenu() {
  $('.menu-burger').on('click', function() {
    $('.menu-burger, .menu-bg, .menu-content').toggleClass('fs');
  });
}
$(document).ready(function() {
  fruitPosition();
  fruitParallax();
});

function fruitPosition() {
  $(window).scroll(function() {
    var totalHeight = $('.fruits').outerHeight();
    var gap = (totalHeight/1.4);
    var position = gap;

    $('.parallax').each(function() {
      var fruitCenter = $(this).height()/2;
      $(this).css('top', position-fruitCenter);

      position += gap;
    });
  });
}

function fruitParallax() {
  $(window).scroll(function() {
    $('.parallax').each(function() {
      var top = $(this).offset().top - $(window).scrollTop();
      var position =  top * 0.17;

      $(this).css('top', position);
    });
  });
}