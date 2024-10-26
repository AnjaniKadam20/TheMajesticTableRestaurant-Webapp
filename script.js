document.getElementById('enterButton').addEventListener('click', function() {
    // Add the fade class to body
    document.body.classList.add('fade');

    // Redirect after animation ends
    setTimeout(function() {
        window.location.href = 'Login_form.html';
    }, 1000); // Match the duration of the fadeOut animation
});
