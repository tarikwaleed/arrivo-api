const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
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
  type: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  groupSize: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  minAllowedAge: {
    type: Number,
    required: true,
  },
  maxAllowedAge: {
    type: Number,
    required: true,
  },
  featured: {
    type: mongoose.Schema.Types.Boolean,
  },
  offer: {
    type: mongoose.Schema.Types.String,
  },
  programs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Program',
    },
  ],
  terms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Term',
    },
  ],
  qnas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Qna',
    },
  ],
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
