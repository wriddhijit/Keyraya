const mongoose = require('mongoose');

const inventoryItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: [String],
  style: [String],
  brand: [String],
  color: [String],
  size: [String],
  price: { type: Number, required: true },
  availability: {
    from: Date,
    to: Date
  }
});

module.exports = mongoose.model('InventoryItem', inventoryItemSchema);
