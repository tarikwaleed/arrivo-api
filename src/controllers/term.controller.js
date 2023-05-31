const TermsAndConditions = require('../models/term.model');

// Create a new term
exports.createTerm = async (req, res) => {
  try {
    const { title, content } = req.body;
    const term = new TermsAndConditions({ title, content });
    const savedTerm = await term.save();
    res.status(201).json(savedTerm);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create term' });
  }
};

// Get all terms
exports.getAllTerms = async (req, res) => {
  try {
    const terms = await TermsAndConditions.find();
    res.json(terms);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch terms' });
  }
};

// Get a single term by ID
exports.getTermById = async (req, res) => {
  try {
    const { id } = req.params;
    const term = await TermsAndConditions.findById(id);
    if (!term) {
      return res.status(404).json({ error: 'Term not found' });
    }
    res.json(term);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch term' });
  }
};

// Update a term
exports.updateTerm = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedTerm = await TermsAndConditions.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!updatedTerm) {
      return res.status(404).json({ error: 'Term not found' });
    }
    res.json(updatedTerm);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update term' });
  }
};

// Delete a term
exports.deleteTerm = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTerm = await TermsAndConditions.findByIdAndDelete(id);
    if (!deletedTerm) {
      return res.status(404).json({ error: 'Term not found' });
    }
    res.json({ message: 'Term deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete term' });
  }
};
