const express = require('express');
const Motorcycle = require('../models/inventoryItem')
const router = express.Router();

// POST: Add a new motorcycle to the inventory
router.post('/', async (req, res) => {
  const { title,model, price, description, image, inStock } = req.body;
  const motorcycle = new Motorcycle({ title,model, price, description, image, inStock });
  
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
    console.log(error)
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
