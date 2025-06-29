require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const updateRoutes = require('./src/routes/updateRoutes');

const app = express();

// Middlewares
app.use(express.json());

app.use((req, res, next) => {
  console.log(`📩 Request: ${req.method} ${req.originalUrl}`);
  next();
});

// Database connection
connectDB();

// Routes
app.use('/api', updateRoutes);

// Start server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`🚀 Field Update Service running on port ${PORT}`);
});
