$(document).ready(function() {
  $('.cover-btn').magnificPopup({
    type: 'inline',
    callbacks: {
      open: function() {
        $('.videoplay')[0].play();
      },
      close: function() {
        $('.videoplay')[0].load();
      }
    }
  });
});
