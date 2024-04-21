document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!validateForm(name, email, password, confirmPassword)) {
        return;
    }

    const userData = {
        name: name,
        email: email,
        password: password
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to store user data');
            }
            return response.json();
        })
        .then(data => {
            // Handle success (data contains the response from JSONPlaceholder)
            console.log('Success:', data);

            // Store the user data in local storage
            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(userData);
            localStorage.setItem('users', JSON.stringify(users));

            // Optionally, redirect the user to another page after successful registration
            window.location.href = 'data-list.html';
        })
        .catch((error) => {
            // Handle error
            console.error('Error:', error);
            // Optionally, display an error message to the user
        });
});

function validateForm(name, email, password, confirmPassword) {
    // Validate form fields
    // You can add your validation logic here
    return true; // Return true if form is valid, false otherwise
}

// for add to cart funtionality in men ,women,kids page
function addToCart(product, price) {
    alert(`Adding to Cart: ${product} - $${price}`);
}

//validations for signup form

function validateForm() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        showError("emailError", "Please enter your email address.");
        return false;
    } else if (!emailRegex.test(email)) {
        showError("emailError", "Please enter a valid email address.");
        return false;
    }

    hideError("emailError");

    if (name.trim() === "") {
        showError("nameError", "Please enter your full name.");
        return false;
    }

    hideError("nameError");

    return true;
}

function loginValidateForm() {
    var email = document.getElementById("email").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        showError("emailError", "Please enter your email address.");
        return false;
    } else if (!emailRegex.test(email)) {
        showError("emailError", "Please enter a valid email address.");
        return false;
    }

    hideError("emailError");

    alert("Form submitted successfully!");
    return true;
}


function showError(id, message) {
    document.getElementById(id).innerHTML = message;
    document.getElementById(id).style.display = "block";
}

function hideError(id) {
    document.getElementById(id).style.display = "none";
}