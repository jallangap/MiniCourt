const locationService = require('../services/locationService');

const updateLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const { location } = req.body;

    if (!location || !location.city || !location.sector || !location.address) {
      return res.status(400).json({ message: 'Complete location information is required' });
    }

    const updatedField = await locationService.updateLocation(id, location);

    if (!updatedField) {
      return res.status(404).json({ message: 'Field not found' });
    }

    res.status(200).json(updatedField);
  } catch (error) {
    res.status(500).json({
      message: 'Error updating location',
      error: error.message,
    });
  }
};

module.exports = {
  updateLocation,
};
