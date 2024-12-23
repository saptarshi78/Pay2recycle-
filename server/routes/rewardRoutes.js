const express = require('express');
const router = express.Router();
const { logReward, getRewards } = require('../controllers/rewardController');

router.post('/log', logReward);
router.get('/', getRewards);

module.exports = router;
