// authController.test.js
const request = require('supertest');
const app = require('../src/index');

describe('Auth Controller', () => {
  it('should handle login', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        username: 'testuser',
        password: 'password123',
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});
