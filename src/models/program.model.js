const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;
