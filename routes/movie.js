import { Router } from "express";
import {
  createMovie,
  getAllMovies,
  getMovie,
  removeMovie,
  updateMovie,
} from "../controller/movie.js";

const router = Router();

router.get("/", getAllMovies);

router.get("/:id", getMovie);

router.post("/", createMovie);

router.patch("/:id", updateMovie);

router.delete("/:id", removeMovie);

export default router;
