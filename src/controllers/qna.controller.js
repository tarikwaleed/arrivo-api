const Qna = require('../models/qna.model');

// Create a new Q&A
exports.createQna = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const qna = new Qna({ question, answer });
    const savedQna = await qna.save();
    res.status(201).json(savedQna);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create Q&A' });
  }
};

// Get all Q&As
exports.getAllQnas = async (req, res) => {
  try {
    const qnas = await Qna.find();
    res.json(qnas);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Q&As' });
  }
};

// Get a single Q&A by ID
exports.getQnaById = async (req, res) => {
  try {
    const { id } = req.params;
    const qna = await Qna.findById(id);
    if (!qna) {
      return res.status(404).json({ error: 'Q&A not found' });
    }
    res.json(qna);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Q&A' });
  }
};

// Update a Q&A
exports.updateQna = async (req, res) => {
  try {
    const { id } = req.params;
    const { question, answer } = req.body;
    const updatedQna = await Qna.findByIdAndUpdate(
      id,
      { question, answer },
      { new: true },
    );
    if (!updatedQna) {
      return res.status(404).json({ error: 'Q&A not found' });
    }
    res.json(updatedQna);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update Q&A' });
  }
};

// Delete a Q&A
exports.deleteQna = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQna = await Qna.findByIdAndDelete(id);
    if (!deletedQna) {
      return res.status(404).json({ error: 'Q&A not found' });
    }
    res.json({ message: 'Q&A deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete Q&A' });
  }
};
