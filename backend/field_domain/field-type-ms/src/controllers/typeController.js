const typeService = require('../services/typeService');

const updateType = async (req, res) => {
  try {
    const { id } = req.params;
    const { type } = req.body;

    if (!type) {
      return res.status(400).json({ message: 'Type is required' });
    }

    const updated = await typeService.updateFieldType(id, type);

    if (!updated) {
      return res.status(404).json({ message: 'Field not found' });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({
      message: 'Error updating type',
      error: error.message,
    });
  }
};

module.exports = {
  updateType,
};
