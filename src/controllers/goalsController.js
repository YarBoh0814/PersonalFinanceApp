const Goal = require('../models/Goals');

// Add a Goal
exports.addGoal = async (req, res) => {
    try {
        const { name, targetAmount } = req.body;
        const goal = new Goal({ name, targetAmount });
        await goal.save();
        res.status(201).json(goal);
    } catch (error) {
        res.status(500).json({ message: 'Error adding goal', error });
    }
};

// Update Goal Progress
exports.updateGoalProgress = async (req, res) => {
    try {
        const { id } = req.params;
        const { savedAmount } = req.body;
        const goal = await Goal.findByIdAndUpdate(
            id,
            { $inc: { savedAmount } },
            { new: true }
        );
        res.status(200).json(goal);
    } catch (error) {
        res.status(500).json({ message: 'Error updating goal progress', error });
    }
};

// Get All Goals
exports.getGoals = async (req, res) => {
    try {
        const goals = await Goal.find();
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching goals', error });
    }
};
