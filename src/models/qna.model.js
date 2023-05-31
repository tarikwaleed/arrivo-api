const mongoose = require('mongoose');

const qAndASchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const Qna = mongoose.model('Qna', qAndASchema);

module.exports = Qna;
