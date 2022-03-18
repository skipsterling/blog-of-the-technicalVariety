const router = require('express').Router();
const homeRoutes = require('./route-home.js');

router.use('/', homeRoutes);

module.exports = router;