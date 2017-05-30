import jwt from 'jsonwebtoken';

import user from '../models/user';

class AuthController {
  constructor() {
    this.auth = this.auth.bind(this);
  }

  auth(req, res) {
    let id = req.body.identity;
    let criteria = this.isEmail(id) ? { email: id } : { name: id };

    user.findOne(criteria).exec().then(document => {
      if (!document) {
        return res.status(422).json({ message: 'Authentication failed. User not found.' });
      }

      document.verifyPassword(req.body.password, (error, valid) => {
        if (error || !valid) {
          return res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        }

        let token = jwt.sign(document, process.env.JWT_SECRET, {
          expiresIn: '7d'
        });

        res.json({
          user: document,
          token
        });
      });
    });
  }

  verify(req, res) {
    let token = req.body.token;

    jwt.verify(token, process.env.JWT_SECRET)
      .then(() => {
        return res.status(200);
      })
      .catch(() => {
        return res.status(401);
      })
  }

  isEmail(string) {
    let re = /\S+@\S+\.\S+/;
    return re.test(string);
  }
}

export default new AuthController;
