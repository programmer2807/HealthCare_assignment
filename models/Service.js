const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Service name is required'],
  },
  description: {
    type: String,
    required: [true, 'Service description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Service price is required'],
    min: [0, 'Price cannot be negative'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Service', serviceSchema);