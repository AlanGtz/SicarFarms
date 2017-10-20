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