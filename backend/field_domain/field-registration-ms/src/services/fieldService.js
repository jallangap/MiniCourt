const Field = require('../models/fieldModel');

const createField = async (fieldData) => {
  const newField = new Field(fieldData);
  return await newField.save();
};

const getAllFields = async () => {
  return await Field.find();
};

const getFieldById = async (id) => {
  return await Field.findById(id);
};

const updateField = async (id, updatedData) => {
  return await Field.findByIdAndUpdate(id, updatedData, { new: true });
};

const deleteField = async (id) => {
  return await Field.findByIdAndDelete(id);
};

module.exports = {
  createField,
  getAllFields,
  getFieldById,
  updateField,
  deleteField
};
