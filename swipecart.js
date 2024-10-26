document.addEventListener("DOMContentLoaded", function() {
    const swipeButton = document.getElementById("swipeButton");
    const cartCountElement = document.getElementById("cart_count");

    // Function to update the cart count and button visibility
    function updateCartCount() {
        const cartCount = parseInt(cartCountElement.textContent) || 0;
        console.log("Cart Count:", cartCount); // Debugging output

        // Check if there are items in the cart
        if (cartCount > 0) {
            swipeButton.style.display = "flex"; // Show button if items in cart
            console.log("Button is visible");
        } else {
            swipeButton.style.display = "none"; // Hide button if cart is empty
            console.log("Button is hidden");
        }
    }

    // Function to simulate adding an item to the cart
    function addItemToCart() {
        let cartCount = parseInt(cartCountElement.textContent) || 0;
        cartCount += 1;
        cartCountElement.textContent = cartCount;
        console.log("Item added. New Cart Count:", cartCount); // Debugging output
        updateCartCount(); // Update the button visibility
    }

    // Function to simulate removing an item from the cart
    function removeItemFromCart() {
        let cartCount = parseInt(cartCountElement.textContent) || 0;
        if (cartCount > 0) {
            cartCount -= 1;
            cartCountElement.textContent = cartCount;
            console.log("Item removed. New Cart Count:", cartCount); // Debugging output
            updateCartCount(); // Update the button visibility
        }
    }

    // Initial check on page load
    updateCartCount();

    // Simulate adding an item to the cart (replace with actual cart functionality)
    document.getElementById("someAddToCartButton").addEventListener("click", addItemToCart);

    // Simulate removing an item from the cart (replace with actual cart functionality)
    document.getElementById("someRemoveFromCartButton").addEventListener("click", removeItemFromCart);
});
