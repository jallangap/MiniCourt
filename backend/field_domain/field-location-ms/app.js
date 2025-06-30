require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const locationRoutes = require('./src/routes/locationRoutes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`📍 Nueva solicitud: ${req.method} ${req.originalUrl}`);
  next();
});

// MongoDB Connection
connectDB();

// Routes
app.use('/api/fields', locationRoutes);

// Server start
const PORT = process.env.PORT || 5007;
app.listen(PORT, () => {
  console.log(`Field Location Service running on port ${PORT}`);
});
