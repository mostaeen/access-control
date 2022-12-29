import { Router } from 'express';
import {
  getAllUsers,
  getCurrentUser,
  loginUser,
  registerUser,
  updateUser,
} from '../controller/user.js';
import { auth } from '../middleware/auth.js';

const router = Router();

router
  .route('/')
  /**
   * @api {get} /user Get All Users
   * @apiGroup User
   * @apiHeader {String} Content-Type application/json
   * @apiExample Example Usage:
   *   url: http://localhost:3000/user
   *
   * @apiSuccessExample {json} Success Response:
   *   HTTP/1.1 200 OK
   *   {
    "_id": "63ac757b480ebfc0075a21e7",
    "name": "abdullah",
    "email": "a@mail.com",
    "password": "$2b$10$lD4wDGLoaOepBZMJgayiJeGj1pe2085lMw8zBX0/.RYWOAjcSdE/K",
    "role": "admin",
    "access": [
      "CREATE",
      "READ",
      "UPDATE",
      "DELETE"
    ],
    "__v": 0
  }
   */
  .get(getAllUsers);

router.get('/me', auth, getCurrentUser);

router.post('/register', registerUser);

router.post('/login', loginUser);

router.put('/:id', updateUser);

export default router;
