$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar-custom').addClass('scrolled');
    } else {
      $('.navbar-custom').removeClass('scrolled');
    }
  });

  // Category Filtering
  $('.filter-btn').on('click', function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    const filter = $(this).attr('data-filter');

    if (filter === 'all') {
      $('.gallery-item-wrap').fadeIn(300);
    } else {
      $('.gallery-item-wrap').hide();
      $(`.gallery-item-wrap[data-category="${filter}"]`).fadeIn(300);
    }
  });

  // Lightbox Modal Trigger
  $('.gallery-card').on('click', function () {
    const imgSrc = $(this).find('img').attr('src');
    const title = $(this).find('.gallery-card-title').text();
    const tag = $(this).find('.gallery-card-tag').text();

    $('#lightboxModalImg').attr('src', imgSrc);
    $('#lightboxModalTitle').text(title);
    $('#lightboxModalTag').text(tag);

    const lightbox = new bootstrap.Modal(document.getElementById('lightboxModal'));
    lightbox.show();
  });
});
