const fieldService = require('../services/fieldService');

const createField = async (req, res) => {
  try {
    const field = await fieldService.createField(req.body);
    res.status(201).json(field);
  } catch (error) {
    res.status(500).json({ message: 'Error creating field', error: error.message });
  }
};

const getAllFields = async (req, res) => {
  try {
    const fields = await fieldService.getAllFields();
    res.status(200).json(fields);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving fields', error: error.message });
  }
};

const getFieldById = async (req, res) => {
  try {
    const field = await fieldService.getFieldById(req.params.id);
    if (!field) {
      return res.status(404).json({ message: 'Field not found' });
    }
    res.status(200).json(field);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving field', error: error.message });
  }
};

const updateField = async (req, res) => {
  try {
    const updatedField = await fieldService.updateField(req.params.id, req.body);
    if (!updatedField) {
      return res.status(404).json({ message: 'Field not found' });
    }
    res.status(200).json(updatedField);
  } catch (error) {
    res.status(500).json({ message: 'Error updating field', error: error.message });
  }
};

const deleteField = async (req, res) => {
  try {
    const deleted = await fieldService.deleteField(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Field not found' });
    }
    res.status(200).json({ message: 'Field deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting field', error: error.message });
  }
};

module.exports = {
  createField,
  getAllFields,
  getFieldById,
  updateField,
  deleteField
};
