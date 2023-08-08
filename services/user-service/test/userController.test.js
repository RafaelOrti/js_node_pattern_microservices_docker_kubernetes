// userController.test.js
const request = require('supertest');
const app = require('../src/index');

describe('User Controller', () => {
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/user/create')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('user');
  });
});
