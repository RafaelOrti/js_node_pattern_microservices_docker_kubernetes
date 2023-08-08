// userService.js
const bcrypt = require('bcrypt');
const User = require('../models/User');

const createUser = async (userData) => {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = new User({ ...userData, password: hashedPassword });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
};
