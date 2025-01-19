const express = require('express');
const router = express.Router();
const { addSavings, getTotalSavings } = require('../controllers/savingsController');

// Add Savings
router.post('/savings', addSavings);

// Get Total Savings
router.get('/savings/total', getTotalSavings);

module.exports = router;
