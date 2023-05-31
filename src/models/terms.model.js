const mongoose = require('mongoose');

const termsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const TermsAndConditions = mongoose.model('Term', termsSchema);

module.exports = TermsAndConditions;
