const mongoose = require('mongoose');

const wasteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  wasteType: { type: String, required: true },
  quantity: { type: Number, required: true }
});

const Waste = mongoose.model('Waste', wasteSchema);

module.exports = Waste;
