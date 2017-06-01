import post from '../models/post';

class PostsController {
  list(req, res) {
    post.find({})
      .sort('-created_at')
      .populate('author')
      .exec((error, posts) => {
        if (error) throw error;
        res.json(posts);
      });
  }

  get(req, res) {
    post.findById(req.params.id)
      .populate('author')
      .exec((error, document) => {
        if (error) throw error;
        res.json(document);
      });
  }

  create(req, res) {
    req.checkBody('title', 'Give this post a title').notEmpty();
    req.checkBody('body', 'Write something!').notEmpty();
    req.checkBody('tags', 'Must be an array').isArray();

    req.getValidationResult().then((result) => {
      if (!result.isEmpty()) {
        res.status(400).json(result.mapped());
        return;
      }

      console.log(req.body.tags);

      let document = new post({
        title: req.body.title,
        author: req.user._doc._id,
        body: req.body.body,
        tags: req.body.tags
      });

      document.save();

      res.json(document);
    });

  }
}

export default new PostsController;
