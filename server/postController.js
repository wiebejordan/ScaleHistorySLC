module.exports = {
    getPosts: (req, res) => {
      const db = req.app.get('db');
      
      db.blog.get_posts()
      .then(posts => res.status(200).send(posts))
      .catch(err => res.status(500).send(err));
    },

    getSinglePost: (req, res) => {
      const db = req.app.get('db'),
            {postid} = req.params;

      db.blog.get_single_post(postid)
      .then(post => res.status(200).send(post))
      .catch(err => res.status(500).send(err));
    },

    newPost: (req, res) => {
      const db = req.app.get('db'),
          {title, img, content, author_id} = req.body;

      db.blog.new_post(title, img, content, author_id)
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).send(err))
    }
}