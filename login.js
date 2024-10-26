document.getElementById('enterButton').addEventListener('click', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get form elements
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    // Validate form fields
    if (username === '' || password=== '') {
        alert('Please enter both username and password.');
        return; // Stop execution if validation fails
    }
    
    // Add the fade class to body
    document.body.classList.add('fade');

    // Redirect after animation ends
    setTimeout(function() {
        window.location.href = 'home.html';
    }, 1000); // Match the duration of the fadeOut animation
});
