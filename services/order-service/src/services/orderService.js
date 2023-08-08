// orderService.js
const Order = require('../models/Order');

const createOrder = async (orderData) => {
  // Assuming user and product IDs are provided in orderData
  try {
    const order = new Order(orderData);
    await order.save();
    return order;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createOrder,
};
