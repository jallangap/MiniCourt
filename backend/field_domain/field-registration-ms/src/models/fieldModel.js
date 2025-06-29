const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['fútbol', 'básquet', 'tenis', 'pádel', 'otros'],
    default: 'otros',
  },
  capacity: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  }
}, {
  timestamps: true
});

const Field = mongoose.model('Field', fieldSchema);

module.exports = Field;
