const fieldService = require('../services/fieldService');

const createField = async (req, res) => {
  try {
    const field = await fieldService.createField(req.body);
    res.status(201).json(field);
  } catch (error) {
    res.status(500).json({ message: 'Error creating field', error: error.message });
  }
};



module.exports = {
  createField
};
