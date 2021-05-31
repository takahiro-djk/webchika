$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalNav-menu').addClass('active');
      } else {
          $('.globalNav-menu').removeClass('active');
      }
  });
});