function submitBooking() {
    event.preventDefault(); // Prevent the form from submitting automatically
    
    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let guests = document.getElementById('guests').value;

    let inputs = document.querySelectorAll('.booking-form input, .booking-form select');
    for (let input of inputs) {
        if (input.value === '') {
            alert("Please fill in all fields.");
            return; // Stop the form submission
        }
    }

    // Create booking message
    let bookingMessage = `BOOKING CONFIRMED! \n\nDetails:\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nNumber of Guests: ${guests}\n\n\nTHANK YOU` ;

    // Show prompt with booking details
    alert(bookingMessage);
}