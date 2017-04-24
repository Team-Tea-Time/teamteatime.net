import user from '../models/user';

class UsersController {
  list(req, res) {
    user.find({}).exec((err, users) => {
      if (err) throw err;
      res.json(users);
    })
  }

  get(req, res) {
    res.json(req.params);
  }
}

export default new UsersController;
