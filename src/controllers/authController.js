const { registerUser, loginUser } = require('../services/authService');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const token = await registerUser(name, email, password);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { register, login };
