// orderController.js
const orderService = require('../services/orderService');

const createOrder = async (req, res) => {
  try {
    const orderData = req.body;
    const order = await orderService.createOrder(orderData);
    res.status(201).json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating order' });
  }
};

module.exports = {
  createOrder,
};
