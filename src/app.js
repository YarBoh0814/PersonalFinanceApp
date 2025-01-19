const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./db');
const routes = require('./routes/routes');
const expenseRoutes = require('./routes/expenseRoutes');
const incomeRoutes = require('./routes/incomeRoutes');


const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();


// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Serve Static Files (e.g., frontend)
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.use('/api', routes);

app.use('/expense', expenseRoutes);
app.use('/income', incomeRoutes);

// Default Route for Root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Income-Expense Tracker API!');
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

