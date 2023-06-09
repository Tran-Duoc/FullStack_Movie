const express = require("express");
const router = express.Router();
const {
  getListTV,
  getDetailTV,
  getSimilarTV,
  getGenresTV,
  getTvVideos,
  getCreditTV,
} = require("../controllers/tv.controller");

router.get("/", getListTV);
router.get("/:id", getDetailTV);
router.get("/genres/tv", getGenresTV);
router.get("/similar/:id", getSimilarTV);
router.get("/videos/:id", getTvVideos);
router.get("/credit/:id", getCreditTV);

module.exports = router;
