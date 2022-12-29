import { Genre } from "../models/genreSchema.js";
import { Movie } from "../models/movieSchema.js";
import { get, getAll, remove, update } from "./generic/crud.js";

const getMovie = get(Movie);

const getAllMovies = getAll(Movie, "genre");

const updateMovie = update(Movie);

const removeMovie = remove(Movie);

const createMovie = async (req, res) => {
  try {
    const genres = await Genre.find();
    const isGenre = genres.find((g) => g._id.toString() === req.body.genre);
    if (!isGenre) {
      return res.status(404).send("Genre not found");
    }
    let movie = new Movie(req.body);
    movie = await movie.save();
    res.send(movie);
    // create(Movie);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getMovie, getAllMovies, createMovie, updateMovie, removeMovie };
