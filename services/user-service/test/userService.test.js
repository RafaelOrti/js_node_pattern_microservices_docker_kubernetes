// userService.test.js
const userService = require('../src/services/userService');

describe('User Service', () => {
  it('should create a new user', async () => {
    const userData = {
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password123',
    };

    const user = await userService.createUser(userData);
    expect(user).toBeDefined();
  });
});
