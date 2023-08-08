// userController.js
const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await userService.createUser(userData);
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating user' });
  }
};

module.exports = {
  createUser,
};
