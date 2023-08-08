// orderService.test.js
const orderService = require('../src/services/orderService');

describe('Order Service', () => {
  it('should create a new order', async () => {
    const orderData = {
      customer: 'customer_id',
      products: [
        { product: 'product_id_1', quantity: 2 },
        { product: 'product_id_2', quantity: 3 },
      ],
      totalAmount: 150,
    };

    const order = await orderService.createOrder(orderData);
    expect(order).toBeDefined();
  });
});
