const Field = require('../models/fieldModel');

// Update only the field type
const updateFieldType = async (id, newType) => {
  const updated = await Field.findByIdAndUpdate(
    id,
    { type: newType },
    { new: true }
  );
  return updated;
};

module.exports = {
  updateFieldType,
};
