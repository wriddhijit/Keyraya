const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all inventory items
router.get('/', inventoryController.getItems);


router.post('/', authMiddleware, inventoryController.addItem);

module.exports = router;
    