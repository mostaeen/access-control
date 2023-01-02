import { Router } from 'express';
import {
  createGenre,
  getAllGenres,
  getGenre,
  removeGenre,
  updateGenre,
} from '../controller/genre.js';
import { auth } from '../middleware/auth.js';

const router = Router();

router.get('/', getAllGenres);

router.get('/:id', getGenre);

router.post('/', createGenre);

router.put('/:id', auth, updateGenre);

router.delete('/:id', [auth], removeGenre);

export default router;
