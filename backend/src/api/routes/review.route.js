const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth.middleware");
const {
  createReview,
  getReviewOfUser,
  removeReview,
} = require("../controllers/review.controller");

router.get("/user/all", auth, getReviewOfUser);
router.post("/user/create", auth, createReview);
router.delete("/user/remove/:id", auth, removeReview);

module.exports = router;
