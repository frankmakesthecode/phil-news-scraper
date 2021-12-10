const router = require('express').Router();
const {
  models: { News },
} = require('../db');

module.exports = router;

// GET /api/inquirer
router.get('/', async (req, res, next) => {
  try {
    const inquirer = await News.findAll({
      where: {
        source: 'inquirer',
      },
    });
    res.status(200).json(inquirer);
  } catch (error) {
    next(error);
  }
});
