
const form = document.querySelector('.card-form');
const inputs = form.querySelectorAll('input');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    clearErrors();

    let hasError = false;

    if (firstName.value.trim() === '') {
        showError(firstName, 'First Name cannot be empty');
        hasError = true;
    }

    if (lastName.value.trim() === '') {
        showError(lastName, 'Last Name cannot be empty');
        hasError = true;
    }

    if (email.value.trim() === '') {
        showError(email, 'Email Address cannot be empty');
        hasError = true;
    } else if (!validateEmail(email.value)) {
        showError(email, 'Looks like this is not an email');
        hasError = true;
    }

    if (password.value.trim() === '') {
        showError(password, 'Password cannot be empty');
        hasError = true;
    }

    if (!hasError) {
        form.submit();
    }
});

function showError(input, message) {
    input.style.border = "1px solid hsl(0, 100%, 74%)";

    const error = document.createElement("span");
    error.classList.add("error-message", "poppins-regular-italic");
    error.innerText = message;
    input.parentElement.insertBefore(error, input.nextSibling);
}

function clearErrors() {
    const errors = document.querySelectorAll(".error-message");
    errors.forEach(error => error.remove());

    inputs.forEach(input => {
        input.style.border = "1px solid hsl(246, 25%, 77%)";
    });
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}