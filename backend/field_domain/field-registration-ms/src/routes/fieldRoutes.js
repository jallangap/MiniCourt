const express = require('express');
const router = express.Router();
const fieldController = require('../controllers/fieldController');

// Route to create a new field
router.post('/', fieldController.createField);

// Route to get all fields
router.get('/', fieldController.getAllFields);

// Route to get a field by ID
router.get('/:id', fieldController.getFieldById);

// Route to update a field
router.put('/:id', fieldController.updateField);

// Route to delete a field
router.delete('/:id', fieldController.deleteField);

module.exports = router;
