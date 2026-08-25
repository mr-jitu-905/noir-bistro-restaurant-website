$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar-custom').addClass('scrolled');
    } else {
      $('.navbar-custom').removeClass('scrolled');
    }
  });

  $('.category-card').on('mouseenter', function () {
    $(this).find('.category-title').css('color', 'var(--gold-primary)');
  }).on('mouseleave', function () {
    $(this).find('.category-title').css('color', 'var(--text-cream)');
  });
});
