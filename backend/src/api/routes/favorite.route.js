const express = require("express");
const { auth } = require("../middlewares/auth.middleware");
const {
  addFavorite,
  getFavoritesOfUser,
  removeFavorite,
} = require("../controllers/favorite.controller");
const router = express.Router();

router.get("/user/all", auth, getFavoritesOfUser);
router.post("/add", auth, addFavorite);
router.delete("/remove/:id", auth, removeFavorite);

module.exports = router;
