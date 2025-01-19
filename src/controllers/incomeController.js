const Income = require('../models/Income');

// Get all incomes
exports.getIncomes = async (req, res) => {
    try {
        const incomes = await Income.find();
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching incomes', error });
    }
};

// Add a new income
exports.addIncome = async (req, res) => {
    try {
        const { amount, description, source } = req.body;
        const income = new Income({ amount, description, source });
        await income.save();
        res.status(201).json(income);
    } catch (error) {
        res.status(500).json({ message: 'Error adding income', error });
    }
};


// Delete Income
exports.deleteIncome = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedIncome = await Income.findByIdAndDelete(id);
        if (!deletedIncome) {
            return res.status(404).json({ message: 'Income not found' });
        }
        res.status(200).json({ message: 'Income deleted successfully' });
    } catch (error) {
        console.error(`Error deleting income: ${error.message}`);
        res.status(500).json({ message: 'Error deleting income', error });
    }
};
