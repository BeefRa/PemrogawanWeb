var isLoginForm = true;

function submitForm() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var messageElement = document.getElementById('message');

  if (isLoginForm) {
    var validUsername = 'user123';
    var validPassword = 'pass123';

    if (username === validUsername && password === validPassword) {
      messageElement.innerHTML = '<div class="alert alert-success" role="alert">Login successful!</div>';
    } else {
      messageElement.innerHTML = '<div class="alert alert-danger" role="alert">Invalid username or password. Try again.</div>';
    }
  } else {
    messageElement.innerHTML = '<div class="alert alert-success" role="alert">Registration successful!</div>';
  }
}

function toggleForm() {
  var formTitleElement = document.getElementById('formTitle');
  var submitButton = document.querySelector('#combinedForm button');

  isLoginForm = !isLoginForm;

  if (isLoginForm) {
    formTitleElement.innerText = 'Login';
    submitButton.innerText = 'Login';
  } else {
    formTitleElement.innerText = 'Register';
    submitButton.innerText = 'Register';
  }

  document.getElementById('message').innerHTML = ''; 
}
