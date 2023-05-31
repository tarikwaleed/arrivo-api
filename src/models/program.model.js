const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
    required: true,
  },
  activities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Activity',
    },
  ],
  destinations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Destination',
    },
  ],
  accommodations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Accommodation',
    },
  ],
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;
