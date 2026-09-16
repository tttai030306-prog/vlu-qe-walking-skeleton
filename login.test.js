const { checkLogin } = require('./login');

describe('checkLogin', () => {
  test('trả về true khi username và password chính xác', () => {
    expect(checkLogin('admin', '123')).toBe(true);
  });

  test('trả về false khi username sai', () => {
    expect(checkLogin('user', '123')).toBe(false);
  });

  test('trả về false khi password sai', () => {
    expect(checkLogin('admin', 'wrong')).toBe(false);
  });
});
