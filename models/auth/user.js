import jwt from 'jsonwebtoken';
import { model, Schema } from 'mongoose';
import { promisify } from 'util';
import { roles } from '../../globals.js';
import { emailRegex } from '../../regex.js';

const userSchema = new Schema({
  name: { type: String, required: [true, 'Name is required'] },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    unique: [true, 'Email already registered'],
    match: [emailRegex, 'Email is not a valid one!'],
    lowercase: true,
    // validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: { type: String, required: [true, 'Password is required'] },
  role: { type: String, enum: roles, default: 'user' },
  access: {
    type: [String],
    enum: ['CREATE', 'READ', 'UPDATE', 'DELETE'],
    default: [],
  },
});

userSchema.methods = {
  generateToken: async function () {
    console.log(this);
    const token = await promisify(jwt.sign)(
      {
        _id: this._id,
        name: this.name,
        email: this.email,
        role: this.role,
        access: this.access,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );
    return token;
  },
};

const User = model('User', userSchema);

export { userSchema, User };
