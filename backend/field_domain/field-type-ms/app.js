require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const typeRoutes = require('./src/routes/typeRoutes');

const app = express();

// Middlewares
app.use(express.json());

app.use((req, res, next) => {
  console.log(`⚙️ New request: ${req.method} ${req.originalUrl}`);
  next();
});

// Database connection
connectDB();

// Routes
app.use('/api/fields', typeRoutes);

// Start server
const PORT = process.env.PORT || 5008;
app.listen(PORT, () => {
  console.log(`Field Type Service running on port ${PORT}`);
});
