function mountSignUpScreen() {
  $('#root').html(SignUpScreen());
  initSignUpScreenListeners();
}

function SignUpScreen() {
  let container = document.createElement('div');

  container.id = 'sign-up-screen';
  container.classList.add('sign-up-screen');
  container.innerHTML = `
    <span class="go-back" id="go-back">
      <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg>
    </span>

    <div class="logo-container">
      <img width="150" height="150" src="../../images/logo.png" />
    </div>

    <div class="middle-section">
      <div class="inputs-container">
        <div>
          <input placeholder="Email" type="text" id="email"/>
        </div>

        <div>
          <input placeholder="Password" type="password" id="password"/>
        </div>

        <div>
          <input placeholder="Password Confirmation" type="password" id="password-confirmation"/>
        </div>
      </div>
    </div>

    <div class="buttons-container">
      <div id="signup-btn">Sign Up</div>
    </div>
  `;

  return container;
}

function initSignUpScreenListeners() {
  $('#go-back').on('click', function() {
    navigate('login-screen');
  });

  $('#signup-btn').on('click', function(){
    let email = $('#email').val();
    let password = $('#password').val();
    let passwordConfirmation = $('#password-confirmation').val();

    if (!isValidEmail(email)) {
      alert('Invalid e-mail');
    }
    else if (!isValidPassword(password)) {
      alert('Invalid password');
    }
    else if (password !== passwordConfirmation) {
      alert('Passwords do not match');
    }
    else {
      signUpWithEmailAndPassword(email, password);
    }
    
  });
}