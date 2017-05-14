import post from '../models/post';

class PostsController {
  list(req, res) {
    post.find({}).exec((error, users) => {
      if (error) throw error;
      res.json(users);
    })
  }

  get(req, res) {
    post.findById(req.params.id).exec((error, document) => {
      if (error) throw error;
      res.json(document);
    });
  }
}

export default new PostsController;
