document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItemsContainer = document.getElementById('cart-items');
  const totalQuantityDisplay = document.getElementById('total-quantity');
  const totalPriceDisplay = document.getElementById('total-price');

  let cart = [];

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.parentElement;
      const productName = product.dataset.name;
      const productPrice = parseFloat(product.dataset.price);

      addToCart(productName, productPrice);
      updateCartUI();
    });
  });

  function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
  }

  function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let totalQuantity = 0;
    let totalPrice = 0;

    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
      cartItemsContainer.appendChild(li);

      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });

    totalQuantityDisplay.textContent = totalQuantity;
    totalPriceDisplay.textContent = totalPrice.toFixed(2);
  }
});
