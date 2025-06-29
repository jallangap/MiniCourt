require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const imageRoutes = require('./src/routes/imageRoutes');

const app = express();

// Middlewares
app.use(express.json());

app.use((req, res, next) => {
  console.log(`📷 Nueva solicitud: ${req.method} ${req.originalUrl}`);
  next();
});

// DB connection
connectDB();

// Routes
app.use('/api/images', imageRoutes);

// Server
const PORT = process.env.PORT || 5006;
app.listen(PORT, () => {
  console.log(`Field Image Service running on port ${PORT}`);
});