const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const inventoryRoutes = require('./routes/inventory');
const reservationRoutes = require('./routes/reservationroute'); 
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: "rzp_test_3SpvPC9jbjQ7oy",
  key_secret: "Ya2GiZuKxxWWdLuEs2yS7UYx"
})

const app = express();

// Load environment variables from .env file
require('dotenv').config();

app.post('./razorpay', async (req, res) => {
  
  razorpay.orders.create({amount, currency, receipt, payment_capture})

})

// Middleware
app.use(cors());
app.use('/seeds', express.static('seeds'));
app.options(cors()) // Use CORS to allow cross-origin requests
app.use(express.json()); // Support json encoded bodies

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
