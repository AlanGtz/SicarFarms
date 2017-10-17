$(document).ready(function() {
  setHeight();
});

$(window).on('resize',function() {
  setHeight();
});

function setHeight() {
  var pHeight = $('.hero-paragraph').outerHeight();
  var bottom = (pHeight/2)+30;

  $('.hero-wrapper').css('bottom', -bottom);
}