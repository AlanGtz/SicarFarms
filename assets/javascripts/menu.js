$(document).ready(function() {
  openMenu();
});

function openMenu() {
  $('.menu-burger').on('click', function() {
    $('.menu-burger, .menu-bg, .menu-content').toggleClass('fs');
  });
}