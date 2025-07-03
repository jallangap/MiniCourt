const Field = require('../models/fieldModel');

const createField = async (fieldData) => {
  const newField = new Field(fieldData);
  return await newField.save();
};



module.exports = {
  createField
};
