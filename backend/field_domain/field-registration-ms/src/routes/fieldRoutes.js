const express = require('express');
const router = express.Router();
const fieldController = require('../controllers/fieldController');

// Route to create a new field
router.post('/', fieldController.createField);



module.exports = router;
