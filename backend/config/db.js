const mongoose = require('mongoose');
// require('dotenv').config()

const connectDB = async () => {
    try {
      await mongoose.connect('mongodb+srv://adep222004:XhF9wJtrvM1m6BHS@cluster0.qzrbc.mongodb.net/courseapp');
      console.log('MongoDB Connected');
    } catch (err) {
      console.error('Database connection error:', err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;