const express = require('express');
const router = express.Router();
const { getIncomes, addIncome } = require('../controllers/incomeController');
const { deleteIncome } = require('../controllers/incomeController');

// Route to fetch all incomes
router.get('/', getIncomes);

// Route to add a new income
router.post('/', addIncome);

// Route to delete income
router.delete('/:id', deleteIncome);

module.exports = router;
