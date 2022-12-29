import { Genre } from "../models/genreSchema.js";
import { create, get, getAll, remove, update } from "./generic/crud.js";

const getAllGenres = getAll(Genre);

const getGenre = get(Genre);

const createGenre = create(Genre);

const updateGenre = update(Genre);

const removeGenre = remove(Genre);

export { getGenre, getAllGenres, createGenre, updateGenre, removeGenre };
