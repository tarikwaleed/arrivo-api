const Accommodation = require('../models/accommodation.model');

// Create a new accommodation
exports.createAccommodation = async (req, res) => {
  try {
    const { hotel, location } = req.body;
    const accommodation = new Accommodation({ hotel, location });
    const savedAccommodation = await accommodation.save();
    res.status(201).json(savedAccommodation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create accommodation' });
  }
};

// Get all accommodations
exports.getAllAccommodations = async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.json(accommodations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch accommodations' });
  }
};

// Get a single accommodation by ID
exports.getAccommodationById = async (req, res) => {
  try {
    const { id } = req.params;
    const accommodation = await Accommodation.findById(id);
    if (!accommodation) {
      return res.status(404).json({ error: 'Accommodation not found' });
    }
    res.json(accommodation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch accommodation' });
  }
};

// Update an accommodation
exports.updateAccommodation = async (req, res) => {
  try {
    const { id } = req.params;
    const { hotel, location } = req.body;
    const updatedAccommodation = await Accommodation.findByIdAndUpdate(
      id,
      { hotel, location },
      { new: true },
    );
    if (!updatedAccommodation) {
      return res.status(404).json({ error: 'Accommodation not found' });
    }
    res.json(updatedAccommodation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update accommodation' });
  }
};

// Delete an accommodation
exports.deleteAccommodation = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAccommodation = await Accommodation.findByIdAndDelete(id);
    if (!deletedAccommodation) {
      return res.status(404).json({ error: 'Accommodation not found' });
    }
    res.json({ message: 'Accommodation deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete accommodation' });
  }
};
