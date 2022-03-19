const { Post, User } = require('../models');

module.exports = {
    getHome: async (req, res) => {
        try {
            const logged_in = req.session.logged_in;
            
            const posts = await Post.findAll({
                include: [{ model: User, attributes: ['username']}],
            });

            const postList = posts.map((post) => post.get({ plain: true }));

            res.status(200).render('home', { logged_in, postList, style: 'home' });
        } catch (err) {
            res.status(500).json(err);
        }
    }
};