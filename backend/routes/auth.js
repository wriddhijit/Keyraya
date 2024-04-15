const mongoose = require('mongoose');
const crypto = require('crypto')

const express = require('express');
const router = express.Router();
// const authController = require('../controllers/authController');
const User = require('../models/user');  // Adjust path as necessary to where your User model is stored
const jwt = require('jsonwebtoken');
router.post('/signup', async (req, res) => {
    try {
      const { name, phoneNumber, aadharNumber, drivingLicenseNumber, email, password } = req.body;
  
      // Check if user already exists
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(409).json({ message: 'User already exists with this email.' });
      }
  
      // Hash the password before saving
      const salt = crypto.randomBytes(16).toString('hex'); // Generate a random salt
      const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex'); // Hash the password with salt
      const hashedPassword = `${hash};${salt}`;
 // stores hashed password and salt concatenated with a delimiter
      
      console.log(hashedPassword)
      // Create new user object
      const newUser = new User({
        name,
        phoneNumber,
        aadharNumber,
        drivingLicenseNumber,
        email,
        passwordHash: hashedPassword
      });
  
      // Save the user to the database
      await newUser.save();
  
      // Send back a response
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  // Login route
  router.post('/login', async (req, res) => {
      const { email, password } = req.body; // Using email to align with typical login credentials
  
      try {
        console.log("Received email and password:", req.body.email, req.body.password);
        

          const user = await User.findOne({ email });   // Log the password submitted by the user
          if (!user) {
              return res.status(404).json({ message: "User not found" });
          }
  
          const [storedHash, storedSalt] = user.passwordHash.split(';'); 

          const hash = crypto.pbkdf2Sync(password, storedSalt, 10000, 64, 'sha512').toString('hex'); // Hash the provided password with stored salt

          const isMatch = hash === storedHash; // Compare hashes 
          if (!isMatch) {
              return res.status(401).json({ message: "Invalid credentials" });
          }
  
          const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
          res.json({ token, userId: user._id, message: "Login successful" });
      } catch (error) {
          console.error("Login error:", error);
          res.status(500).json({ message: "Server error during authentication" });
      }
  });
  module.exports = router;
  