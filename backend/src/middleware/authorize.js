import jwt from 'jsonwebtoken';

export default function (req, res, next) {
  var token = req.body.token || req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({ message: 'An auth token is required.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      return res.status(403).json({ message: 'Failed to authenticate token.' });
    } else {
      req.user = decoded;
      next();
    }
  });
}
