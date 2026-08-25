$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar-custom').addClass('scrolled');
    } else {
      $('.navbar-custom').removeClass('scrolled');
    }
  });

  $('#contactForm').on('submit', function (e) {
    e.preventDefault();

    const name = $('#contactName').val().trim();
    const email = $('#contactEmail').val().trim();
    const subject = $('#contactSubject').val().trim();
    const message = $('#contactMessage').val().trim();

    if (!name || !email || !subject || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    $('#modalSenderName').text(name);
    const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
    contactModal.show();

    $('#contactForm')[0].reset();
  });
});
