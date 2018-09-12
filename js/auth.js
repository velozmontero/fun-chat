function session() {
  if (window.user) {
    navigate('chat-screen');
  }
  else {
    navigate('login-screen');
  }
}