const Router = require('express');
const router = new Router();
const itemRouter = require('./itemRouter');

router.use('/items', itemRouter);

module.exports = router;