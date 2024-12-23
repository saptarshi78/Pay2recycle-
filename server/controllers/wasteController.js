 
const Waste = require('../models/wasteModel');

// Log recycling activity
const logWaste = async (req, res) => {
  const { userId, wasteType, quantity } = req.body;

  try {
    const waste = new Waste({ userId, wasteType, quantity });
    await waste.save();
    res.status(201).json(waste);
  } catch (err) {
    res.status(400).json({ error: 'Error logging waste' });
  }
};

// Get recycling records
const getWasteLogs = async (req, res) => {
  try {
    const wasteLogs = await Waste.find();
    res.status(200).json(wasteLogs);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching waste logs' });
  }
};

module.exports = { logWaste, getWasteLogs };
