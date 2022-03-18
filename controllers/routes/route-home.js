// gets home
const router = require('express').Router();
const { getHome } = require('../controlHome');

router.get('/', getHome);

module.exports = router;