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

  getBySlug(req, res) {
    post.findOne({ slug: req.params.slug })
      .populate('author')
      .exec((error, post) => {
        if (error) throw error;
        res.json(post);
      });
  }

  create(req, res) {
    req.checkBody('title', 'Give this post a title').notEmpty();
    req.checkBody('body', 'Write something!').notEmpty();

    req.getValidationResult().then((result) => {
      if (!result.isEmpty()) {
        res.status(400).json(result.mapped());
        return;
      }

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

  update(req, res) {
    req.checkBody('title', 'Give this post a title').notEmpty();
    req.checkBody('slug', 'Give this post a slug').notEmpty();
    req.checkBody('body', 'Write something!').notEmpty();

    req.getValidationResult().then((result) => {
      if (!result.isEmpty()) {
        res.status(400).json(result.mapped());
        return;
      }

      post.findById(req.params.id)
        .exec((error, document) => {
          if (error) throw error;

          document.title = req.body.title;
          document.slug = req.body.slug;
          document.body = req.body.body;
          document.tags = req.body.tags || [];
          document.save();

          res.json(document);
        });
    });
  }

  delete(req, res) {
    post.findByIdAndRemove(req.params.id)
      .exec((error, document) => {
        if (error) throw error;
        res.json(document);
      });
  }
}

export default new PostsController;
