const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    targetAmount: { type: Number, required: true },
    savedAmount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Goal', GoalSchema);
