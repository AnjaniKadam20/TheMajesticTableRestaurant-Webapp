document.getElementById('enterButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting automatically
    
    // Get the values of the password and confirm password fields
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    // Check if the passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return; // Stop the form submission
    }

    // Check if all fields are filled
    const inputs = document.querySelectorAll('.newacc-form input, .newacc-form select');
    for (let input of inputs) {
        if (input.value === '') {
            alert("Please fill in all fields.");
            return; // Stop the form submission
        }
    }

    // If everything is fine, submit the form
    alert("Account successfully created!");
    
    let container = document.querySelector('.createnewacc-container');
    container.classList.add('fade'); // Add fade effect
    
    // Wait for the fade effect to complete (1 second) before redirecting
    setTimeout(function() {
        window.location.href = 'login_form.html'; // Redirect to the login page
    }, 1000); // 1 second = 1000 milliseconds
});

    
