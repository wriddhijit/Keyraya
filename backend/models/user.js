const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  aadharNumber: { type: String, required: true, unique: true },
  drivingLicenseNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true }
});
userSchema.pre('save', async function(next) {
 
  if (!this.isModified('passwordHash')) return next();

  
  this.passwordHash = await bcrypt.hash(this.passwordHash, 12);
  next();
});
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.passwordHash);
};

module.exports = mongoose.model('User', userSchema);
