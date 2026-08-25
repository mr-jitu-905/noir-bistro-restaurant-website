$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar-custom').addClass('scrolled');
    } else {
      $('.navbar-custom').removeClass('scrolled');
    }
  });

  $('.philosophy-card').on('mouseenter', function () {
    $(this).find('.philosophy-icon').css({
      'background': 'var(--gold-primary)',
      'color': '#0B0B0B',
      'transition': 'all 0.3s ease'
    });
  }).on('mouseleave', function () {
    $(this).find('.philosophy-icon').css({
      'background': 'rgba(201, 162, 39, 0.08)',
      'color': 'var(--gold-primary)'
    });
  });
});
