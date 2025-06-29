const Field = require('../models/fieldModel');

const updateImage = async (fieldId, imageUrl) => {
  return await Field.findByIdAndUpdate(
    fieldId,
    { imageUrl },
    { new: true, runValidators: true }
  );
};

module.exports = {
  updateImage,
};
