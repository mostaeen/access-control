import bcrypt from 'bcrypt';
import { User } from '../models/auth/user.js';
import { isvalidID } from '../regex.js';
import { getAll } from './generic/crud.js';

const getAllUsers = getAll(User);

const getCurrentUser = async function (req, res) {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const registerUser = async function (req, res, next) {
  const role = req.body.role;

  // if (adminRoles.includes(role)) {
  //   const token = req.headers.token;
  //   if (!token) {
  //     return res.status(401).send("Access denied. No token provided.");
  //   }
  //   try {
  //     const decoded = await util.promisify(jwt.verify)(
  //       token,
  //       process.env.JWT_SECRET
  //     );
  //     if (!adminRoles.includes(decoded.role)) {
  //       return next("Permission denied!");
  //     }
  //   } catch (error) {
  //     return next(error.message);
  //   }
  // }

  try {
    const name = req.body.name;
    const email = req.body.email;
    const access = req.body.access;
    let password = req.body.password;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    let user = new User({
      name,
      email,
      role,
      access,
      password: hashedPassword,
    });
    user = await user.save();
    const token = await user.generateToken();
    res.header('token', token).status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const token = await user.generateToken();
      res.header('token', token).status(200).send(`Welcome ${user.name}`);
    } else {
      res.status(401).send('Email or password is incorrect');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateUser = async (req, res, next) => {
  // const role = req.body.role;
  // if (adminRoles.includes(role)) {
  //   const token = req.headers.token;
  //   if (!token) {
  //     return res.status(401).send('Access denied. No token provided.');
  //   }
  //   try {
  //     const decoded = await util.promisify(jwt.verify)(
  //       token,
  //       process.env.JWT_SECRET
  //     );
  //     if (!adminRoles.includes(decoded.role)) {
  //       return next('Permission denied!');
  //     }
  //   } catch (error) {
  //     return next(error.message);
  //   }
  // }
  try {
    if (req.params.id.match(isvalidID)) {
      let user = await User.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send(user);
    } else {
      res.status(400).send('Please provide a valid id');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { getAllUsers, registerUser, loginUser, updateUser, getCurrentUser };
