function checkLogin(username, password) {
  return username === 'admin' && password === '123';
}

if (typeof document !== 'undefined') {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (checkLogin(username, password)) {
      message.textContent = 'Đăng nhập thành công!';
    } else {
      message.textContent = 'Sai username hoặc password!';
    }
  });
}

module.exports = { checkLogin };
