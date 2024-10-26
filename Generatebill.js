document.addEventListener("DOMContentLoaded", function () {
    const billItemsContainer = document.getElementById("billItemsContainer");
    const subtotalElement = document.getElementById("subtotal");
    const taxElement = document.getElementById("tax");
    const serviceChargeElement = document.getElementById("service-charge");
    const totalElement = document.getElementById("total");

    // Function to get cart items from localStorage
    function getCartItems() {
        return JSON.parse(localStorage.getItem("cartItems")) || [];
    }

    // Function to format number as currency
    function formatCurrency(amount) {
        return `₹${amount.toFixed(2)}`;
    }

    // Function to render cart items and calculate amounts
    function renderBillItems() {
        const cartItems = getCartItems();
        let subtotal = 0;

        billItemsContainer.innerHTML = ''; // Clear the container before rendering

        cartItems.forEach((item) => {
            const billItem = document.createElement("tr");
            billItem.innerHTML = `
                <td>${item.name}</td>
            
                <td>${formatCurrency(item.price)}</td>
            `;
            billItemsContainer.appendChild(billItem);

            // Accumulate subtotal
            subtotal += item.price;
        });

        // Calculate tax and service charge
        const tax = subtotal * 0.10; // 10% tax
        const serviceCharge = subtotal * 0.05; // 5% service charge
        const total = subtotal + tax + serviceCharge;

        // Display amounts
        subtotalElement.textContent = `Subtotal: ${formatCurrency(subtotal)}`;
        taxElement.textContent = `Tax (10%): ${formatCurrency(tax)}`;
        serviceChargeElement.textContent = `Service Charge (5%): ${formatCurrency(serviceCharge)}`;
        totalElement.textContent = `Total: ${formatCurrency(total)}`;
    }

    // Render bill items on page load
    renderBillItems();
});
