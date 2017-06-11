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

  create(req, res) {
    req.checkBody('name', 'Enter a username').notEmpty();
    req.checkBody('email', 'Enter an email address').notEmpty();
    req.checkBody('password', 'Enter a password').notEmpty();

    req.getValidationResult().then(result => {
      if (!result.isEmpty()) {
        res.status(400).json(result.mapped());
        return;
      }

      User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }, (error, user) => {
        if (error) throw error;
        res.json(user);
      });
    });
  }

  update(req, res) {
    req.checkBody('name', 'Enter a username').notEmpty();
    req.checkBody('email', 'Enter an email address').notEmpty();

    req.getValidationResult().then(result => {
      if (!result.isEmpty()) {
        res.status(400).json(result.mapped());
        return;
      }

      User.findById(req.params.id)
        .exec((error, user) => {
          if (error) throw error;

          if (req.body.password) {
            user.password = req.body.password;
          }

          user.name = req.body.name;
          user.email = req.body.email;
          user.save();

          res.json(user);
        });
    });
  }

  delete(req, res) {
    User.findByIdAndRemove(req.params.id)
      .exec((error, user) => {
        if (error) throw error;
        res.json(user);
      });
  }
}

export default new UsersController;
