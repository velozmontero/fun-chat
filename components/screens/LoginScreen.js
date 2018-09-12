function mountLoginScreen() {
  $('#root').html(LoginScreen());
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
        <span>Facebook</span>
        <span>Google</span>
      </div>
    </div>

    <div class="buttons-container">
      <div>Sign In</div>
      <div>Sign Up</div>
    </div>
  `;

  return container;
}