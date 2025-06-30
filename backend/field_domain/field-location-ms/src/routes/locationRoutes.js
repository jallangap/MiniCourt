const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// PUT endpoint to update the location of a field
router.put('/location/:id', locationController.updateLocation);

module.exports = router;
