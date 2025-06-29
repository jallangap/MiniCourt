const express = require('express');
const router = express.Router();
const fieldController = require('../controllers/fieldController');

// Ruta para crear un nuevo campo
router.post('/fields', fieldController.createField);

// Ruta para obtener todos los campos
router.get('/fields', fieldController.getAllFields);

// Ruta para obtener un campo por ID
router.get('/fields/:id', fieldController.getFieldById);

// Ruta para actualizar un campo
router.put('/fields/:id', fieldController.updateField);

// Ruta para eliminar un campo
router.delete('/fields/:id', fieldController.deleteField);

module.exports = router;
