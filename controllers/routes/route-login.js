const router = require('express').Router();
const { getForm } = require('../controlLogin');

router.get('/login', getForm);
router.get('/signup', getForm);

module.exports = router;