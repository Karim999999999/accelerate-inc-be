import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import { secret } from '../config/environment.js';

const secureRoute = async (req, res, next) => {
  try {
    const authToken = req.headers.authorization;

    if (!authToken || !authToken.startsWith('Bearer')) {
      console.log('error - token does not exist or is not a bearer token');
      return res.status(401).send({ message: 'Unauthorized' });
    }

    const token = authToken.replace('Bearer ', '');

    jwt.verify(token, secret, async (err, data) => {
      // error would be any errors that happen decrypting our token
      // data would be the payload on the token if decrytped successfully

      if (err) {
        return res
          .status(401)
          .send({ message: 'Unauthorized - could not decrypt token' });
      }

      const user = await User.findById(data.userId);

      if (!user) {
        return res.status(401).send({ message: 'Unauthorized' });
      }

      req.currentUser = user;

      next();
    });
  } catch (error) {
    return res.status(401).send({ message: 'Unathorized' });
  }
};

export default secureRoute;
