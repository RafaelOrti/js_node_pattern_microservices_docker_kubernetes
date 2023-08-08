// authController.js
const authService = require('../services/authService');

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await authService.authenticateUser(username, password);

    if (token) {
      res.status(200).json({ success: true, token });
    } else {
      res.status(401).json({ success: false, message: 'Authentication failed' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = {
  login,
};
