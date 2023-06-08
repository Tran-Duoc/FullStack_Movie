const express = require("express");
const userRoute = require("./user.route");
const movieRoute = require("./movie.route");
const tvRouter = require("./tv.route");
const router = express.Router();

router.use("/user", userRoute);
router.use("/movie", movieRoute);
router.use("/tv", tvRouter);

module.exports = router;
