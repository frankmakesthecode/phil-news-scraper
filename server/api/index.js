const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/news', require('./news'));
router.use('/rappler', require('./rappler'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
