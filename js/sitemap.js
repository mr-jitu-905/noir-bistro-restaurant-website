$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar-custom').addClass('scrolled');
    } else {
      $('.navbar-custom').removeClass('scrolled');
    }
  });

  $('.sitemap-page-link').on('mouseenter', function () {
    $(this).find('i').css('color', 'var(--gold-primary)');
  }).on('mouseleave', function () {
    $(this).find('i').css('color', 'var(--text-muted)');
  });
});
