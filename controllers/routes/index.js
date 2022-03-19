const router = require('express').Router();
const homeRoutes = require('./route-home.js');
const loginRoutes = require('./route-login');
const userRoutes = require('./route-user');
const postRoutes = require('./route-post');
const commentRoutes = require('./route-comment');
const dashboardRoutes = require('./route-dashboard');

router.use('/', homeRoutes);
router.use('/', loginRoutes);
router.use('/user', userRoutes);
router.use('/posts', postRoutes);
router.use('/comment', commentRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;