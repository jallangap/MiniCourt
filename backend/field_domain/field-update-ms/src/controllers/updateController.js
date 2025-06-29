const updateService = require('../services/updateService');

const updateField = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedField = await updateService.updateField(id, req.body);

    if (!updatedField) {
      return res.status(404).json({ message: 'Field not found' });
    }

    res.status(200).json(updatedField);
  } catch (error) {
    res.status(500).json({ message: 'Error updating field', error: error.message });
  }
};

module.exports = {
  updateField
};
