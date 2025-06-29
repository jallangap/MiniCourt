const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    city: { type: String, required: true },
    sector: { type: String, required: true },
    address: { type: String, required: true },
  },
  type: {
    type: String,
    enum: ['cesped', 'sintetica', 'indor', 'otros'],
    default: 'otros',
  },
  capacity: { type: Number, required: true },
  available: { type: Boolean, default: true },
  imageUrl: { type: String }, // URL of the field image
}, {
  timestamps: true
});

module.exports = mongoose.model('Field', fieldSchema);
