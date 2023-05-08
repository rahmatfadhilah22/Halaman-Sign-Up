  const passwordInput = document.getElementById('Password');
  const showPasswordBtn = document.getElementById('show-password');

  showPasswordBtn.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      showPasswordBtn.textContent = 'Hide';
    } else {
      passwordInput.type = 'password';
      showPasswordBtn.textContent = 'Show';
    }
  });