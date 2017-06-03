import User from '../models/User';

class UsersController {
  list(req, res) {
    User.find({}).exec((error, users) => {
      if (error) throw error;
      res.json(users);
    });
  }

  get(req, res) {
    User.findById(req.params.id).exec((error, document) => {
      if (error) throw error;
      res.json(document);
    });
  }
}

export default new UsersController;
