const { Post, User, Comment } = require("../models");

module.exports = {
  getDashboard: async (req, res) => {
    const logged_in = req.session.logged_in;

    const posts = await Post.findAll({
      where: {user_id: req.session.user_id},
      include: [{ model: User, attributes: ['username']}]
    });

    const postList = posts.map((post) => post.get({ plain: true }));
    res.status(200).render('dashboard', { logged_in, postList, style: 'dashboard' });
  }
}