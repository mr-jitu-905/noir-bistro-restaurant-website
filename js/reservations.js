$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar-custom').addClass('scrolled');
    } else {
      $('.navbar-custom').removeClass('scrolled');
    }
  });

  // Set default min date to today
  const today = new Date().toISOString().split('T')[0];
  $('#resDate').attr('min', today);

  $('#reservationForm').on('submit', function (e) {
    e.preventDefault();

    const name = $('#resName').val().trim();
    const email = $('#resEmail').val().trim();
    const phone = $('#resPhone').val().trim();
    const date = $('#resDate').val();
    const time = $('#resTime').val();
    const guests = $('#resGuests').val();
    const seating = $('#resSeating').val();
    const requests = $('#resRequests').val().trim() || 'None';

    if (!name || !email || !phone || !date || !time || !guests || !seating) {
      alert('Please fill out all required fields.');
      return;
    }

    // Populate confirmation modal
    $('#modalGuestName').text(name);
    $('#modalDetails').html(
      `<strong>Date:</strong> ${date} at ${time}<br>` +
      `<strong>Party Size:</strong> ${guests} Guests<br>` +
      `<strong>Seating:</strong> ${seating}<br>` +
      `<strong>Contact:</strong> ${phone} | ${email}<br>` +
      `<strong>Special Notes:</strong> ${requests}`
    );

    const resModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    resModal.show();

    $('#reservationForm')[0].reset();
  });
});
