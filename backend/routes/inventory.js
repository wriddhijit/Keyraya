const express = require('express');
const Motorcycle = require('../models/motorcycle');

const router = express.Router();

// POST: Add a new motorcycle to the inventory
router.post('/', async (req, res) => {
  const { model, price, description, image, inStock } = req.body;
  const motorcycle = new Motorcycle({ model, price, description, image, inStock });
  
  try {
    const savedMotorcycle = await motorcycle.save();
    res.status(201).json(savedMotorcycle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Retrieve all motorcycles from the inventory
router.get('/', async (req, res) => {
  try {
    const motorcycles = await Motorcycle.find();
    res.json(motorcycles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Additional routes for updating and deleting can be added here

module.exports = router;
