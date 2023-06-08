const favoriteModel = require("../models/favorite.model");
const responseHandler = require("../utils/response.util");

const favoriteController = {
  addFavorite: async (req, res) => {
    try {
      const isFavorite = await favoriteModel.findOne({
        user: req.user._id,
        mediaId: req.body.mediaId,
      });

      if (isFavorite) {
        return responseHandler.success(
          res,
          "Đã nằm trong mục sở thích",
          isFavorite
        );
      }

      const favorite = new favoriteModel({
        ...req.body,
        user: req.user._id,
      });

      await favorite.save();
      return responseHandler.created(
        res,
        "Thêm vào mục yêu thích thành công",
        favorite
      );
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  removeFavorite: async (req, res) => {
    try {
      const { id } = req.params;
      const isFavorite = await favoriteModel.findByIdAndRemove({
        _id: id,
        user: req.user._id,
      });

      if (!isFavorite) {
        return responseHandler.badRequest(res, "Not Found");
      }

      return responseHandler.success(
        res,
        "Đã xóa khỏi mục yêu thích",
        isFavorite
      );
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  getFavoritesOfUser: async (req, res) => {
    try {
      const data = await favoriteModel
        .find({ user: req.user._id })
        .sort("-createdAt");

      if (data) {
        return responseHandler.success(res, "Lấy thành công", data);
      } else {
        return responseHandler.badRequest(res, "Không thể lấy data");
      }
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
};

module.exports = favoriteController;
