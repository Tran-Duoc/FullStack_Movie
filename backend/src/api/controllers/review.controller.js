const reviewModel = require("../models/review.model");
const responseHandler = require("../utils/response.util");

const reviewController = {
  getReviewOfUser: async (req, res) => {
    try {
      const review = await reviewModel
        .find({ user: req.user._id })
        .sort("-createdAt");
      return responseHandler.success(res, "Lấy thành công", review);
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  createReview: async (req, res) => {
    try {
      const review = new reviewModel({
        user: req.user._id,
        ...req.body,
      });
      await review.save();
      return responseHandler.success(res, "Đã thêm review", ...review._doc);
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  removeReview: async (req, res) => {
    const { id } = req.params;
    const review = await reviewModel.findByIdAndRemove({
      user: req.user._id,
      _id: id,
    });
    if (review) {
      return responseHandler.badRequest(res, "NOT FOUND");
    } else {
      return responseHandler.success(res, "Xóa thành công", review);
    }
  },
};

module.exports = reviewController;
