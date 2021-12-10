const router = require('express').Router();
const {
  models: { News },
} = require('../db');

module.exports = router;

// GET /api/rappler
router.get('/', async (req, res, next) => {
  try {
    const rappler = await News.findAll({
      where: {
        source: 'rappler',
      },
    });
    res.status(200).json(rappler);
  } catch (error) {
    next(error);
  }
});
