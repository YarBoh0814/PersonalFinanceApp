const express = require('express');
const { addIncome, getIncomes } = require('../controllers/incomeController');
const { addExpense, getExpenses } = require('../controllers/expenseController');
const router = express.Router();

// Income Routes
router.post('/income', addIncome);
router.get('/income', getIncomes);

// Expense Routes
router.post('/expense', addExpense);
router.get('/expense', getExpenses);

module.exports = router;
