const responseHandler = require("../utils/response.util");
const { movieApi } = require("../services/tmdb/tmbd.api");

const movieController = {
  getMovies: async (req, res) => {
    try {
      const { page, mediaCategory } = req.query;
      const { data } = await movieApi.getMovies(mediaCategory, { page });
      return responseHandler.success(res, "Lấy thành công", {
        mediaCategory: mediaCategory,
        ...data,
      });
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  getMovie: async (req, res) => {
    try {
      const { id } = req.params;

      const { data } = await movieApi.getMovie(id);
      if (data) {
        return responseHandler.success(res, "Lấy thành công", data);
      }
      return res.json(data);
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  getSimilarMovie: async (req, res) => {
    try {
      const { id } = req.params;
      const { page } = req.query;
      const { data } = await movieApi.getSimilarMovie(id, { page });
      return responseHandler.success(res, "Lay thanh cong", data);
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
};
module.exports = movieController;
