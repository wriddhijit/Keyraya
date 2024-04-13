const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const inventoryRoutes = require('./routes/inventory');
const reservationRoutes = require('./routes/reservationroute'); 
const app = express();

// Load environment variables from .env file
require('dotenv').config();

// Middleware
app.use(cors()); // Use CORS to allow cross-origin requests
app.use(bodyParser.json()); // Support json encoded bodies

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/reservation', reservationRoutes); 

// Debug: Print the MongoDB URI to ensure it's loaded correctly
console.log('MongoDB URI:', process.env.MONGO_URI);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
