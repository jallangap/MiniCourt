require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const fieldRoutes = require('./src/routes/fieldRoutes');

const app = express();

// Middlewares
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api/fields', fieldRoutes);

// Start server
const PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
  console.log(`Field Registration Service running on port ${PORT}`);
});
