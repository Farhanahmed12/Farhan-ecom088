// script.js
document.querySelector('.search-button').addEventListener('click', function() {
    const query = document.querySelector('.search-input').value;
    if (query) {
        alert(`You searched for: ${query}`);
        // You can replace the alert with an actual search function or redirect to a search results page.
    } else {
        alert('Please enter a search term.');
    }
});




// Simple cart counter functionality
let cartCount = 0;
const cartButton = document.getElementById('cart-btn');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartButton.textContent = `Cart (${cartCount})`;
    });
});
