import post from '../models/post';

class PostsController {
  list(req, res) {
    post.find({})
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
    let document = new post({
      title: req.body.title,
      author: req.user._doc._id,
      body: req.body.body,
      tags: req.body.tags
    });

    document.save();

    res.json(document);
  }
}

export default new PostsController;
