
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const express = require('express');
const router = express.Router();

exports.register = async (req, res) => {
  try {
    const { name, phoneNumber, aadharNumber, drivingLicenseNumber, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      name,
      phoneNumber,
      aadharNumber,
      drivingLicenseNumber,
      email,
      passwordHash: hashedPassword
    });
    await user.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
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
};

// //exports.login = async (req, res) => {
//   console.log("Received email and password:", req.body.email, req.body.password);
//   try {
   
//     // Assuming a user model and that you're checking credentials after this
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) {
//       return res.status(404).send('User not found');
//     }
//     // Continue your authentication logic here...
//   } catch (error) {
//     console.error("Error during simplified login:", error);
//     res.status(500).send("Internal Server Error");
//   }
// };

// Setup route to use the login function
router.post('/login', exports.login);

module.exports = router;
