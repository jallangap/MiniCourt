const Field = require('../models/fieldModel');

const updateField = async (id, data) => {
  try {
    const updatedField = await Field.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });
    return updatedField;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  updateField
};
