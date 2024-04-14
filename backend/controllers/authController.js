 
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const express = require('express');
const router = express.Router();

exports.register = async (req, res) => {
  try {
    const { name, phoneNumber, aadharNumber, drivingLicenseNumber, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: 'User already exists with this email.' });
    }

    // Hash the password before saving
    const salt = crypto.randomBytes(16).toString('hex'); // Generate a random salt
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    console.log(salt) // Hash the password with salt
    console.log(hash)
    const passwordHash = `${hash};${salt}`; // stores hashed password and salt concatenated with a delimiter
    
console.log(password)
    // Create new user object
    const newUser = new User({
      name,
      phoneNumber,
      aadharNumber,
      drivingLicenseNumber,
      email,
      passwordHash: passwordHash
    });

    // Save the user to the database
    await newUser.save();

    // Send back a response
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: "Internal server error" });
  }
}

/***exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }
    console.log("Stored hash:", user.passwordHash);  // Log the hash stored in the database
    console.log("Submitted password:", password);    // Log the password submitted by the user

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};**/

exports.login = async (req, res) => {
  console.log("Received email and password:", req.body.email, req.body.password);
  try {
   
    // Assuming a user model and that you're checking credentials after this
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send('User not found');
    }
    // Continue your authentication logic here...
  } catch (error) {
    console.error("Error during simplified login:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Setup route to use the login function
router.post('/login', exports.login);

module.exports = router;
