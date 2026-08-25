$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar-custom').addClass('scrolled');
    } else {
      $('.navbar-custom').removeClass('scrolled');
    }
  });

  $('.toc-list a').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    if ($(target).length) {
      $('html, body').animate(
        {
          scrollTop: $(target).offset().top - 120
        },
        500
      );
    }
  });
});
