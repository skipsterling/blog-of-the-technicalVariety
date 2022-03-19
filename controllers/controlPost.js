const { Post, User, Comment } = require("../models");

module.exports = {
  getPost: async (req, res) => {
    const postId = req.params.id;
    const logged_in = req.session.logged_in;

    const posts = await Post.findAll({
      where: {id : postId},
      include: [{model: Comment, include: [{model: User}]}, {model: User}]
    });

    const postList = posts.map((post) => post.get({ plain: true }));

    res.status(200).render('post', { logged_in, post: postList[0], style: 'post' });
  },
  getNewPost: async (req, res) => {
    const logged_in = req.session.logged_in;
    try {
      res.status(200).render('addPost', { logged_in, style: 'add-post' });
    } catch (err) {
      res.status(500).end();
    }
  },
  addPost: async (req, res) => {
    try {
      const newPost = await Post.create({
        user_id: req.session.user_id,
        title: req.body.title,
        content: req.body.content
      });

      res.status(200).end();
    } catch (err) {res.status(500).end();}
  },
  getUpdatePost: async (req, res) => {
    const logged_in = req.session.logged_in;
    const user_id = req.session.user_id;
    const post_id = req.params.id;

    try {
      const posts = await Post.findAll({where: {id: post_id, user_id: user_id}});

      if (posts) {
        const postList = posts.map((post) => post.get({ plain: true }));

        res.status(200).render('updatePost', { logged_in, post: postList[0], style: 'update-post'});
      }
      
    } catch (err) {res.status(500).end();}
  },
  updatePost: async (req, res) => {
    try {
      const post = await Post.update(
        {title: req.body.title, content: req.body.content},
        {where: {id: req.params.id}
      });

      res.status(200).end();
    } catch (err) {
      res.status(500).end();
    }
  },
  deletePost: async (req, res) => {
    console.log('delete');
    try {
      const post = await Post.destroy({where: {id: req.body.id}});

      res.status(200).end();
    } catch (err) {
      res.status(500).end();
    }
  },
}