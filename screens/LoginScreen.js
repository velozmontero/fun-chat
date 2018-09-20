function mountLoginScreen() {
  $('#root').html(LoginScreen());
  initLoginScreenListeners();
}

function LoginScreen() {
  let container = document.createElement('div');

  container.id = 'login-screen';
  container.classList.add('login-screen');
  container.innerHTML = `
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
      </div>

      <div class="social-login-btns">
        <span id="facebook-login-btn">
          <i class="auth-icon icon ion-logo-facebook"></i>
        </span>

        <span id="google-login-btn">
          <i class="auth-icon icon ion-logo-google"></i>
        </span>
      </div>
    </div>

    <div class="buttons-container">
      <div id="signin-btn">Sign In</div>
      <div id="go-to-signup-screen-btn">Sign Up</div>
    </div>
  `;

  return container;
}

function initLoginScreenListeners() {
  $('#google-login-btn').on('click', function(){
    createPersistantSession(logInWithGoogle);
  });

  $('#go-to-signup-screen-btn').on('click', function() {
    console.log('going to sign up screen');
    navigate('sign-up-screen');
  });
}