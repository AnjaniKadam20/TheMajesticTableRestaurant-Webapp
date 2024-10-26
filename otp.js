const otpInputs = document.querySelectorAll('.otp-input');

// Function to handle focus and input navigation
otpInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        // Move to the next input field when a digit is entered
        if (input.value && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        // Navigate with arrow keys
        if (e.key === 'ArrowLeft' && index > 0) {
            otpInputs[index - 1].focus();
        } else if (e.key === 'ArrowRight' && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });
});

// Function to handle OTP verification
document.getElementById('verify-btn').addEventListener('click', () => {
    const otp = Array.from(otpInputs).map(input => input.value).join('');

    if (otp.length === 6) {
        alert('OTP Verified: ' + otp);
        // Redirect to payment successful page
        window.location.href = 'payment_success.html'; // Replace with your actual payment success page URL
    } else {
        alert('Please enter a 6-digit OTP.');
    }
});
