const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv=require('dotenv')

dotenv.config()

// Register controller -creates the user
exports.register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }
      // Create new user
      user = new User({ name, email, password });
      await user.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };

  // Login controller - generates JWT token
  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
  
      // Verify password
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Enter Correct Password' });
      }
  
      // Generate JWT token
      const token = jwt.sign(
        { id: user._id }, 
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );
  
      res.json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      });
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };