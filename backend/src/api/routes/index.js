const express = require("express");
const userRoute = require("./user.route");
const movieRoute = require("./movie.route");
const tvRouter = require("./tv.route");
const favoriteRouter = require("./favorite.route");
const router = express.Router();

router.use("/user", userRoute);
router.use("/movie", movieRoute);
router.use("/tv", tvRouter);
router.use("/favorite", favoriteRouter);

module.exports = router;
