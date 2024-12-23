const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  type: { type: String, required: true }
});

const Reward = mongoose.model('Reward', rewardSchema);

module.exports = Reward;
