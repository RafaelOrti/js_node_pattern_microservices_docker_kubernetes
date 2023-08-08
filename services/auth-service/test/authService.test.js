// authService.test.js
const authService = require('../src/services/authService');

describe('Auth Service', () => {
  it('should authenticate a valid user', async () => {
    const isAuthenticated = await authService.authenticateUser('testuser', 'password123');
    expect(isAuthenticated).toBe(true);
  });

  it('should reject an invalid user', async () => {
    const isAuthenticated = await authService.authenticateUser('invaliduser', 'wrongpassword');
    expect(isAuthenticated).toBe(false);
  });
});
