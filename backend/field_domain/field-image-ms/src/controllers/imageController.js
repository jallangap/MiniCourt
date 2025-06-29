const imageService = require('../services/imageService');

const updateImage = async (req, res) => {
  try {
    const { id } = req.params;
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ message: 'Image URL is required' });
    }

    const updatedField = await imageService.updateImage(id, imageUrl);

    if (!updatedField) {
      return res.status(404).json({ message: 'Field not found' });
    }

    res.status(200).json(updatedField);
  } catch (error) {
    res.status(500).json({
      message: 'Error updating image',
      error: error.message,
    });
  }
};

module.exports = {
  updateImage,
};
