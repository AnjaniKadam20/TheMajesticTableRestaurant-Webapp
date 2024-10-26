
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartCountElement = document.getElementById("cart_count");
    const cartItemsContainer = document.getElementById("cartItemsContainer");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const itemName = button.closest(".content").querySelector("h2").textContent;
            const itemPrice = button.closest(".content").querySelector("p:last-of-type").textContent;

            const item = {
                name: itemName,
                price: itemPrice
            };

            cart.push(item);
            updateCartCount();
            saveCartToLocalStorage();
        });
    });

    function updateCartCount() {
        cartCountElement.textContent = cart.length;
    }

    function saveCartToLocalStorage() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function displayCartItems() {
        cartItemsContainer.innerHTML = ""; // Clear existing items
        cart.forEach((item, index) => {
            const div = document.createElement("div");
            div.classList.add("cart-item");
            div.innerHTML = `
                <h4>${item.name}</h4>
                <p>${item.price}</p>
            `;
            cartItemsContainer.appendChild(div);
        });
    }

    if (cartItemsContainer) {
        displayCartItems();
    }

    updateCartCount();
});
