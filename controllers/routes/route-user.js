const router = require('express').Router();
const auth = require('../../utils/auth');
const { login, signup, logout } = require('../controlUser');

router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', logout);

module.exports = router;
