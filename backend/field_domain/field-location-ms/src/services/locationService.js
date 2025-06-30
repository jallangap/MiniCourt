const Field = require('../models/fieldModel');

const updateLocation = async (id, location) => {
  const updatedField = await Field.findByIdAndUpdate(
    id,
    { location },
    { new: true }
  );
  return updatedField;
};

module.exports = {
  updateLocation,
};
