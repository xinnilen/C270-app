function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
  
    if (username === '' || password === '') {
      errorMessage.textContent = "Both fields are required.";
      return false;
    }
  
    // Example validation: minimum 6 characters for both username and password
    if (username.length < 6 || password.length < 6) {
      errorMessage.textContent = "Username and password must be at least 6 characters long.";
      return false;
    }
  
    // Success (you can modify this logic as needed)
    errorMessage.textContent = "";
    alert('Login successful!');
    return true;
  }
  