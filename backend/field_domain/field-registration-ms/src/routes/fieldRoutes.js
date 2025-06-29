const express = require('express');
const router = express.Router();
const fieldController = require('../controllers/fieldController');

// Ruta para crear un nuevo campo
router.post('/', fieldController.createField);

// Ruta para obtener todos los campos
router.get('/', fieldController.getAllFields);

// Ruta para obtener un campo por ID
router.get('/:id', fieldController.getFieldById);

// Ruta para actualizar un campo
router.put('/:id', fieldController.updateField);

// Ruta para eliminar un campo
router.delete('/:id', fieldController.deleteField);

module.exports = router;
