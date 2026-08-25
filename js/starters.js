$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar-custom').addClass('scrolled');
    } else {
      $('.navbar-custom').removeClass('scrolled');
    }
  });

  $('.dish-card').on('mouseenter', function () {
    $(this).find('.dish-title').css('color', 'var(--gold-primary)');
  }).on('mouseleave', function () {
    $(this).find('.dish-title').css('color', 'var(--text-cream)');
  });
});
