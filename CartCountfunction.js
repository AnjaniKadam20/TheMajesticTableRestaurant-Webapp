// // Retrieve the cart count from localStorage when the page loads
// let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;
// document.getElementById('cart_count').textContent = cartCount;

// // Event listener for adding items to the cart
// document.querySelectorAll('.add-to-cart').forEach(button => {
//     button.addEventListener('click', function() {
//         cartCount++;
//         document.getElementById('cart_count').textContent = cartCount;
//         localStorage.setItem('cartCount', cartCount); // Store the updated count in localStorage
//     });
// });


// 
// document.addEventListener("DOMContentLoaded", function () {
//     const addToCartButtons = document.querySelectorAll(".add-to-cart");
//     const cartCountElement = document.getElementById("cart_count");

//     // Function to get cart items from localStorage
//     function getCartItems() {
//         return JSON.parse(localStorage.getItem("cartItems")) || [];
//     }

//     // Function to save cart items to localStorage
//     function saveCartItems(items) {
//         localStorage.setItem("cartItems", JSON.stringify(items));
//     }

//     // Function to update the cart count
//     function updateCartCount() {
//         const cartItems = getCartItems();
//         cartCountElement.textContent = cartItems.length;
//     }

//     // Function to add an item to the cart
//     function addToCart(item) {
//         const cartItems = getCartItems();
//         cartItems.push(item);
//         saveCartItems(cartItems);
//         updateCartCount();
//     }

//     // Event listener for Add to Cart buttons
//     addToCartButtons.forEach((button) => {
//         button.addEventListener("click", function () {
//             const item = {
//                 name: this.closest(".container").querySelector("h2").textContent,
//                 description: this.closest(".container").querySelector("p").textContent,
//                 // Retrieve price from data attribute
//                 price: parseInt(this.closest(".container").querySelector("p[data-price]").getAttribute("data-price"), 10),
//             };
//             addToCart(item);
//             alert(`${item.name} has been added to the cart!`);
//         });
//     });

//     // Function to render cart items in the Cart page
//     function renderCartItems() {
//         const cartItemsContainer = document.getElementById("cartItemsContainer");
//         const cartItems = getCartItems();

//         cartItemsContainer.innerHTML = ''; // Clear the container before rendering

//         cartItems.forEach((item, index) => {
//             const cartItem = document.createElement("div");
//             cartItem.classList.add("cart-item", "d-flex", "justify-content-between", "align-items-center", "mb-4");
//             cartItem.innerHTML = `
//                 <div class="cart-item-details">
//                     <h5>${item.name}</h5>
//                     <p>${item.description}</p>
//                     <!-- Convert price back to dollars for display -->
//                     <p><strong>₹${item.price}</strong></p>
//                 </div>
//                 <button class="btn btn-danger remove-item" data-index="${index}">Remove</button>
//             `;
//             cartItemsContainer.appendChild(cartItem);

//             // Remove item event
//             cartItem.querySelector(".remove-item").addEventListener("click", function () {
//                 const itemIndex = this.getAttribute("data-index");
//                 cartItems.splice(itemIndex, 1);
//                 saveCartItems(cartItems);
//                 updateCartCount();
//                 renderCartItems(); // Re-render the cart items to update the list
//             });
//         });
//     }

//     // Render cart items if on cart page
//     if (document.getElementById("cartItemsContainer")) {
//         renderCartItems();
//     }

//     // Initialize cart count on page load
//     updateCartCount();
// });
       
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartCountElement = document.getElementById("cart_count");
    const totalAmountElement = document.getElementById("total_amount"); // Element to display total amount

    // Function to get cart items from localStorage
    function getCartItems() {
        return JSON.parse(localStorage.getItem("cartItems")) || [];
    }

    // Function to save cart items to localStorage
    function saveCartItems(items) {
        localStorage.setItem("cartItems", JSON.stringify(items));
    }

    // Function to update the cart count
    function updateCartCount() {
        const cartItems = getCartItems();
        cartCountElement.textContent = cartItems.length;
    }

    // Function to add an item to the cart
    function addToCart(item) {
        const cartItems = getCartItems();
        cartItems.push(item);
        saveCartItems(cartItems);
        updateCartCount();
    }

    // Event listener for Add to Cart buttons
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const item = {
                name: this.closest(".container").querySelector("h2").textContent,
                description: this.closest(".container").querySelector("p").textContent,
                // Retrieve price from data attribute
                price: parseInt(this.closest(".container").querySelector("p[data-price]").getAttribute("data-price"), 10),
            };
            addToCart(item);
            alert(`${item.name} has been added to the cart!`);
        });
    });

    // Function to render cart items in the Cart page and calculate total amount
    function renderCartItems() {
        const cartItemsContainer = document.getElementById("cartItemsContainer");
        const cartItems = getCartItems();
        let totalAmount = 0;

        cartItemsContainer.innerHTML = ''; // Clear the container before rendering

        cartItems.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item", "d-flex", "justify-content-between", "align-items-center", "mb-4");
            cartItem.innerHTML = `
                <div class="cart-item-details">
                    <h5>${item.name}</h5>
                    <p>${item.description}</p>
                    <!-- Convert price back to rupees for display -->
                    <p><strong>₹${item.price}</strong></p>
                </div>
                <button class="btn btn-danger remove-item" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);

            // Accumulate total amount
            totalAmount += item.price;

            // Remove item event
            cartItem.querySelector(".remove-item").addEventListener("click", function () {
                const itemIndex = this.getAttribute("data-index");
                cartItems.splice(itemIndex, 1);
                saveCartItems(cartItems);
                updateCartCount();
                renderCartItems(); // Re-render the cart items to update the list and total
            });
        });

        // Display total amount
        if (totalAmountElement) {
            totalAmountElement.textContent = `Total: ₹${totalAmount}`;
        }
    }

    // Render cart items if on cart page
    if (document.getElementById("cartItemsContainer")) {
        renderCartItems();
    }

    // Initialize cart count on page load
    updateCartCount();
});
