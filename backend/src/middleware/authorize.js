import jwt from 'jsonwebtoken';

export default function (req, res, next) {
  let token = req.body.token || req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({ message: 'An auth token is required.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      return res.status(403).json({ message: 'Failed to authenticate token.' });
    }

    req.user = decoded;
    next();
  });
}
