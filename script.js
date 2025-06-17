console.log("Pet Food Store loaded successfully!");

// 🛒 Cart functionality
let cart = [];
let cartCount = 0;

// Add to Cart functionality
document.querySelectorAll('.product-card button').forEach((button) => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const name = productCard.querySelector('h3').innerText;
    const price = productCard.querySelector('p').innerText;
    const imgSrc = productCard.querySelector('img').src;

    cart.push({ name, price, imgSrc });
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;

    alert(`${name} added to cart!`);
    renderCart();
  });
});

// Render cart items with remove button
function renderCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <img src="${item.imgSrc}" alt="${item.name}" width="80" />
      <div>
        <h4>${item.name}</h4>
        <p>${item.price}</p>
      </div>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;
    cartItemsContainer.appendChild(itemDiv);
  });

  // Handle remove buttons
  document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function () {
      const index = parseInt(this.getAttribute('data-index'));
      cart.splice(index, 1); // remove item from cart
      cartCount--;
      document.getElementById('cart-count').textContent = cartCount;
      renderCart(); // re-render updated cart
    });
  });
}

// 📬 Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('form-message');

  if (name === '' || email === '' || message === '') {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.textContent = 'Thank you for contacting us!';
  formMessage.style.color = 'green';
  document.getElementById('contact-form').reset();
});
