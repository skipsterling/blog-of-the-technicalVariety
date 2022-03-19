//gets all the posts by a user and renders
const router = require('express').Router();
const auth = require('../../utils/auth');
const { getDashboard } = require('../controlDashboard');

router.get('/', auth.userAuth, getDashboard);

module.exports = router;