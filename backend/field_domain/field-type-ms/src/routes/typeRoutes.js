const express = require('express');
const router = express.Router();
const typeController = require('../controllers/typeController');

// Route to update only the type of a field
router.put('/type/:id', typeController.updateType);

module.exports = router;
