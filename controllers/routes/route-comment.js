// Post comment
const router = require('express').Router();
const auth = require('../../utils/auth');
const { addComment } = require('../controlComment');

router.post('/add', auth.userAuthFetch, addComment);

module.exports = router;