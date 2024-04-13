const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

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
