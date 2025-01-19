const express = require('express');
const router = express.Router();
const {
    addGoal,
    updateGoalProgress,
    getGoals,
} = require('../controllers/goalsController');

// Add a Goal
router.post('/goals', addGoal);

// Update Goal Progress
router.patch('/goals/:id', updateGoalProgress);

// Get All Goals
router.get('/goals', getGoals);

module.exports = router;
