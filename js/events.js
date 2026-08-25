$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar-custom').addClass('scrolled');
    } else {
      $('.navbar-custom').removeClass('scrolled');
    }
  });

  const today = new Date().toISOString().split('T')[0];
  $('#eventDate').attr('min', today);

  $('#eventInquiryForm').on('submit', function (e) {
    e.preventDefault();

    const name = $('#eventName').val().trim();
    const email = $('#eventEmail').val().trim();
    const phone = $('#eventPhone').val().trim();
    const type = $('#eventType').val();
    const date = $('#eventDate').val();
    const guests = $('#eventGuests').val();

    if (!name || !email || !phone || !type || !date || !guests) {
      alert('Please fill out all required fields.');
      return;
    }

    $('#modalInquirerName').text(name);
    $('#modalEventDetails').html(
      `<strong>Occasion Type:</strong> ${type}<br>` +
      `<strong>Target Date:</strong> ${date}<br>` +
      `<strong>Estimated Guests:</strong> ${guests}<br>` +
      `<strong>Contact:</strong> ${phone} | ${email}`
    );

    const inquiryModal = new bootstrap.Modal(document.getElementById('eventInquiryModal'));
    inquiryModal.show();

    $('#eventInquiryForm')[0].reset();
  });
});
