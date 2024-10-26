document.getElementById('enterButton1').addEventListener('click', function() {
    // Add the fade class to body
    document.body.classList.add('fade');

    // Redirect after animation ends
    setTimeout(function() {
        window.location.href ="createnewacc.html";
    }, 1000); // Match the duration of the fadeOut animation
});
