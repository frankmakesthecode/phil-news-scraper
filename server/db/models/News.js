const Sequelize = require('sequelize');
const db = require('../db');

const News = db.define('news', {
  source: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  link: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = News;
