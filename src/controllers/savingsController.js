const Savings = require('../models/Savings');

// Add Savings
exports.addSavings = async (req, res) => {
    try {
        const { amount } = req.body;
        const savings = new Savings({ amount });
        await savings.save();
        res.status(201).json(savings);
    } catch (error) {
        res.status(500).json({ message: 'Error adding savings', error });
    }
};

// Get Total Savings
exports.getTotalSavings = async (req, res) => {
    try {
        const savings = await Savings.aggregate([
            { $group: { _id: null, total: { $sum: '$amount' } } },
        ]);
        const total = savings[0]?.total || 0;
        res.status(200).json({ total });
    } catch (error) {
        console.error('Error fetching total savings:', error);
        res.status(500).json({ message: 'Error fetching total savings' });
    }
};

