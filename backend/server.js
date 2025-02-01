const cors = require('cors');
const connectDB = require('./config/db');
const dotenv=require('dotenv')
const express=require('express')

// Initialize express app
const app = express();
dotenv.config()

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/courses', require('./routes/courses'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));