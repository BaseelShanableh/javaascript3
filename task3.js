document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const registerButton = document.getElementById('registerButton');
    const loginButton = document.getElementById('loginButton');
  
    registerButton.addEventListener('click', function() {
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      const userData = {
        firstName,
        lastName,
        email,
        password
      };
  
      // Store user data in local storage
      localStorage.setItem('userData', JSON.stringify(userData));
      alert('Registration successful! Please proceed to login.');
  
      // Show login form after registration
      document.querySelector('.register-form').style.display = 'none';
      document.querySelector('.login-form').style.display = 'block';
    });
  
    loginButton.addEventListener('click', function() {
      const loginEmail = document.getElementById('loginEmail').value;
      const loginPassword = document.getElementById('loginPassword').value;
  
      const storedUserData = JSON.parse(localStorage.getItem('userData'));
  
      if (storedUserData && loginEmail === storedUserData.email && loginPassword === storedUserData.password) {
        alert('Login successful!');
      } else {
        alert('Incorrect email or password. Please try again.');
      }
    });
  });
  