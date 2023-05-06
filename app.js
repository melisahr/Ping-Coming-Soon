const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const error = document.createElement('p');
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email); 
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  if (validateEmail(email)) {
    form.reset();
    error.style.display = "none";
  } else {
    emailInput.style.borderColor = "red";
    error.style.display = "block";
  }
});

emailInput.addEventListener('input', () => {
    emailInput.style.borderColor = "red";
    error.style.display = "none";
    error.textContent = "Please provide a valid email address";
}); 

error.textContent = "Please provide a valid email address";
error.style.color = "red";
error.style.fontSize = "0.8rem";
error.style.display = "none";
error.style.marginRight="15%";
emailInput.parentElement.appendChild(error);