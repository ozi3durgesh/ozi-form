const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const formRoutes = require('./routes/formRoutes');
const { SERVER_CONFIG } = require('./config/constants');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', formRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Database connection and server startup
const startServer = async () => {
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
    
    // Sync database (optional - only if you want to create tables)
    await sequelize.sync({ alter: process.env.NODE_ENV === 'development' });
    console.log('Database synchronized.');
    
    // Start server
    app.listen(SERVER_CONFIG.PORT, () => {
      console.log(`Server is running on port ${SERVER_CONFIG.PORT}`);
      console.log(`Environment: ${SERVER_CONFIG.NODE_ENV}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
    process.exit(1);
  }
};

startServer();

module.exports = app;

