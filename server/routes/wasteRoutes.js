const express = require('express');
const router = express.Router();
const { logWaste, getWasteLogs } = require('../controllers/wasteController');

router.post('/log', logWaste);
router.get('/', getWasteLogs);

module.exports = router;
