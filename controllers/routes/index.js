const router = require('express').Router();
const homeRoutes = require('./route-home.js');
const loginRoutes = require('./route-login');

router.use('/', homeRoutes);
router.use('/', loginRoutes);

module.exports = router;