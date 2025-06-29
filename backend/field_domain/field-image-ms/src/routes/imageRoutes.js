const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

// Route to update the image of a field
router.put('/image/:id', imageController.updateImage);

module.exports = router;