const router = require('express').Router();
const { Op } = require('sequelize');
const {
  models: { News },
} = require('../db');

module.exports = router;

// GET /api/news
router.get('/', async (req, res, next) => {
  try {
    const news = await News.findAll();
    res.status(200).send(news);
  } catch (error) {
    next(error);
  }
});

// GET /api/news/filtered
router.get('/filtered', async (req, res, next) => {
  try {
    const { query } = req;
    const filteredNews = await News.findAll({
      where: {
        title: {
          [Op.iLike]: `%${query.search}%`,
        },
      },
    });
    res.status(200).send(filteredNews);
  } catch (error) {
    next(error);
  }
});
