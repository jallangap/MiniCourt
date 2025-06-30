require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const locationRoutes = require('./src/routes/locationRoutes');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware para registrar solicitudes
app.use((req, res, next) => {
  console.log(`📍 Nueva solicitud: ${req.method} ${req.originalUrl}`);
  next();
});

// Conexión a MongoDB
connectDB();

// Rutas
app.use('/api/fields', locationRoutes);

// Inicio del servidor
const PORT = process.env.PORT || 5007;
app.listen(PORT, () => {
  console.log(`Field Location Service running on port ${PORT}`);
});
