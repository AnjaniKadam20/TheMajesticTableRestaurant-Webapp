// Listen for the click event on the swipe button
document.getElementById('swipeButton').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default anchor behavior

    // Display an alert confirming the order
    alert('Order confirmed!');

    // Redirect to the aftercartdisplaypage.html
    window.location.href = 'aftercartdisplaypage.html';
});
