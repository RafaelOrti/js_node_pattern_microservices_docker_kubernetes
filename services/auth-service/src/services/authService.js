// authService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateUser = async (username, password) => {
  const user = await User.findOne({ username });

  if (!user) {
    return null;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (isPasswordValid) {
    const token = generateAuthToken(user);
    return token;
  }

  return null;
};

const generateAuthToken = (user) => {
  const token = jwt.sign({ id: user._id, username: user.username }, 'secret_key', {
    expiresIn: '1h',
  });
  return token;
};

module.exports = {
  authenticateUser,
};
