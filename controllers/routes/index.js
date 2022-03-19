const router = require('express').Router();
const homeRoutes = require('./route-home.js');
const loginRoutes = require('./route-login');
const commentRoutes = require('./route-comment');
const dashboardRoutes = require('./route-dashboard');

router.use('/', homeRoutes);
router.use('/', loginRoutes);
router.use('/comment', commentRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;