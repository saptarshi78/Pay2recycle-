const Reward = require('../models/rewardModel');

// Log reward
const logReward = async (req, res) => {
  const { userId, amount, type } = req.body;

  try {
    const reward = new Reward({ userId, amount, type });
    await reward.save();
    res.status(201).json(reward);
  } catch (err) {
    res.status(400).json({ error: 'Error logging reward' });
  }
};

// Get rewards
const getRewards = async (req, res) => {
  try {
    const rewards = await Reward.find();
    res.status(200).json(rewards);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching rewards' });
  }
};

module.exports = { logReward, getRewards };
