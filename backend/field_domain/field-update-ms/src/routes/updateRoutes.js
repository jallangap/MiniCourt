const express = require('express');
const router = express.Router();
const updateController = require('../controllers/updateController');

// Update existent Route
router.put('/fields/:id', updateController.updateField);

module.exports = router;
