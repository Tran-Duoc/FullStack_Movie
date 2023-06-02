const express = require("express");
const router = express.Router();
const {
  getMovies,
  getMovie,
  getSimilarMovie,
} = require("../controllers/movie.controller");

router.get("/", getMovies);
router.get("/:id", getMovie);
router.get("/:id/similar", getSimilarMovie);

module.exports = router;
