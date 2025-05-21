const express = require('express');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Middlewares
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false, // Set to true if using HTTPS
    sameSite: 'None',  // Required for cross-origin requests
    maxAge: 3 * 24 * 60 * 60 * 1000  // Cookie expiration (3 days)
  }
}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', require('./routes/login'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/user', require('./routes/user'));  // Assuming user-related routes
app.use('/api/products', require('./routes/product'));  // Assuming product-related routes

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));
