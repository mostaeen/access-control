import jwt from 'jsonwebtoken';
import * as util from 'util';
import { User } from '../models/auth/user.js';

const auth = async function (req, res, next) {
  // console.log(req.headers.token);
  const token = req.headers.token;
  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const decoded = await util.promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET
    );
    // Check if the user still in the database or deleted
    const exist = await User.findById(decoded._id);
    if (!exist) {
      next('User does not exist. Token expired!');
    }
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};

export { auth };
