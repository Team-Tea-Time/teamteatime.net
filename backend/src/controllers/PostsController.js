import Post from '../models/Post';

class PostsController {
  constructor() {
    this.list = this.list.bind(this);
    this.listByTag = this.listByTag.bind(this);
  }

  list(req, res) {
    this.paginate(req, res);
  }

  get(req, res) {
    Post.findById(req.params.id)
      .populate('author')
      .exec((error, document) => {
        if (error) throw error;
        res.json(document);
      });
  }

  getBySlug(req, res) {
    Post.findOne({ slug: req.params.slug })
      .populate('author')
      .exec((error, document) => {
        if (error) throw error;
        res.json(document);
      });
  }

  listByTag(req, res) {
    this.paginate(req, res, { tags: decodeURI(req.params.tag) });
  }

  create(req, res) {
    req.checkBody('title', 'Give this post a title').notEmpty();
    req.checkBody('body', 'Write something!').notEmpty();

    req.getValidationResult().then(result => {
      if (!result.isEmpty()) {
        res.status(400).json(result.mapped());
        return;
      }

      let document = new Post({
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

    req.getValidationResult().then(result => {
      if (!result.isEmpty()) {
        res.status(400).json(result.mapped());
        return;
      }

      Post.findById(req.params.id)
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
    Post.findByIdAndRemove(req.params.id)
      .exec((error, document) => {
        if (error) throw error;
        res.json(document);
      });
  }

  paginate(req, res, constraint = {}) {
    let page = req.query.page || 1;
    Post.count(constraint)
      .exec((error, count) => {
        if (error) throw error;
        Post.paginate(
          constraint,
          { page, limit: 10, sort: '-created_at', populate: 'author' }
        ).then(result => {
          res.json({ total: count, posts: result.docs });
        });
      });
  }
}

export default new PostsController;
