const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FormSubmission = sequelize.define('form_submissions', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  contact: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  location: {
    type: DataTypes.JSON,
    allowNull: true
  },
  preferredDate: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  preferredTime: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  items: {
    type: DataTypes.JSON,
    allowNull: true
  },
  quantity: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'form_submissions',
  timestamps: false // Since we have created_at as a column, not using Sequelize timestamps
});

module.exports = FormSubmission;

