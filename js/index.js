$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar-custom').addClass('scrolled');
    } else {
      $('.navbar-custom').removeClass('scrolled');
    }
  });

  let animated = false;
  const statsSection = $('.stats-section');

  if (statsSection.length) {
    $(window).on('scroll', function () {
      const oTop = statsSection.offset().top - window.innerHeight;
      if (!animated && $(window).scrollTop() > oTop) {
        $('.stat-number').each(function () {
          const $this = $(this);
          const countTo = parseInt($this.attr('data-count'), 10);
          $({ countNum: 0 }).animate(
            { countNum: countTo },
            {
              duration: 2000,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                const suffix = $this.attr('data-suffix') || '';
                $this.text(this.countNum + suffix);
              }
            }
          );
        });
        animated = true;
      }
    });
  }
});
