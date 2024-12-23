 
const User = require('../models/userModel');

// Register a new user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Error creating user' });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching users' });
  }
};

module.exports = { registerUser, getUsers };
