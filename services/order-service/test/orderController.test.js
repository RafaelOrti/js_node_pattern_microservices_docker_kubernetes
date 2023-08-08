// orderController.test.js
const request = require('supertest');
const app = require('../src/index');

describe('Order Controller', () => {
  it('should create a new order', async () => {
    const response = await request(app)
      .post('/order/create')
      .send({
        customer: 'customer_id',
        products: [
          { product: 'product_id_1', quantity: 2 },
          { product: 'product_id_2', quantity: 3 },
        ],
        totalAmount: 150,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('order');
  });
});
