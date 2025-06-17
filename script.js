console.log("Pet Food Store loaded successfully!");

// Add to Cart Button Alert
const buttons = document.querySelectorAll('.product-card button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});

// Contact Form Validation and Success Message
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

  // Optional: Clear the form
  document.getElementById('contact-form').reset();
});
