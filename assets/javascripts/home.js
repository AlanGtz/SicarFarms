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
