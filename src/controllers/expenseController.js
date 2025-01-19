const Expense = require('../models/Expense');

// Get all expenses
exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching expenses', error });
    }
};

// Add a new expense
exports.addExpense = async (req, res) => {
    try {
        const { amount, description, category } = req.body;

        // Validate input
        if (!amount || !description || !category) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const expense = new Expense({ amount, description, category });
        await expense.save();

        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ message: 'Error adding expense', error });
    }
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedExpense = await Expense.findByIdAndDelete(id);
        if (!deletedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        console.error(`Error deleting expense: ${error.message}`);
        res.status(500).json({ message: 'Error deleting expense', error });
    }
};