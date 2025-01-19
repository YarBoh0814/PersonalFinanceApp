const express = require('express');
const router = express.Router();
const { getExpenses, addExpense, deleteExpense } = require('../controllers/expenseController');

// Route to fetch all expenses
router.get('/', getExpenses);

// Route to add a new expense
router.post('/', addExpense);

// Route to delete expenses
router.delete('/:id', deleteExpense);

module.exports = router;
