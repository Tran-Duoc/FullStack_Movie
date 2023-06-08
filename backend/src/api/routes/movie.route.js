const express = require("express");
const router = express.Router();
const {
  getMovies,
  getMovie,
  getSimilarMovie,
  getMovieGenres,
  getVideoMovie,
} = require("../controllers/movie.controller");

router.get("/", getMovies);
router.get("/:id", getMovie);
router.get("/videos/:id", getVideoMovie);
router.get("/genres/movie", getMovieGenres);
router.get("/:id/similar", getSimilarMovie);

module.exports = router;
