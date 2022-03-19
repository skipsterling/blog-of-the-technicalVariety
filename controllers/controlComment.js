const { Comment } = require("../models");

module.exports = {
  addComment: async (req, res) => {
    try {
      if (req.body.comment.length !== 0) {
        const comment = await Comment.create({
          user_id: req.session.user_id,
          post_id: req.body.post,
          content: req.body.comment.trim(),
        });
        
        res.status(200).end();
      } else {
        res.status(500).json({error: 'empty'});
      }

    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  },
};