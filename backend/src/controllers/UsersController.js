import user from '../models/user';

class UsersController {
  list(req, res) {
    user.find({}).exec((error, users) => {
      if (error) throw error;
      res.json(users);
    })
  }

  get(req, res) {
    user.findById(req.params.id).exec((error, document) => {
      if (error) throw error;
      res.json(document);
    });
  }
}

export default new UsersController;
