const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    source: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Income', IncomeSchema);
