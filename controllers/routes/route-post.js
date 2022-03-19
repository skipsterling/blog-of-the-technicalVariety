const router = require('express').Router();
const { userAuth, userAuthFetch } = require('../../utils/auth');
const { getPost, getNewPost, addPost, getUpdatePost, updatePost, deletePost } = require('../controlPost');

router.get('/add', userAuth, getNewPost);
router.post('/add', userAuth, addPost);
router.get('/update/:id', userAuth, getUpdatePost);
router.put('/update/:id', userAuthFetch, updatePost);
router.delete('/delete/:id', userAuthFetch, deletePost);
router.get('/:id', getPost);

module.exports = router;