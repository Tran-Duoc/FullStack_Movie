const responseHandler = require("../utils/response.util");
const { movieApi } = require("../services/tmdb/tmbd.api");

const movieController = {
  getMovies: async (req, res) => {
    try {
      const { page, mediaCategory } = req.query;
      const { data } = await movieApi.getMovies(mediaCategory, { page });
      if (data) {
        return responseHandler.success(res, "Lấy thành công", {
          mediaCategory: mediaCategory,
          ...data,
        });
      } else {
        return responseHandler.badRequest(res, "Lấy không thành công");
      }
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
      } else {
        return responseHandler.badRequest(res, "Lấy không thành công");
      }
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  getSimilarMovie: async (req, res) => {
    try {
      const { id } = req.params;
      const { page } = req.query;
      const { data } = await movieApi.getSimilarMovie(id, { page });
      if (data) {
        return responseHandler.success(res, "Lay thanh cong", data);
      } else {
        return responseHandler.badRequest(res, "Lấy không thành công");
      }
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  getMovieGenres: async (req, res) => {
    try {
      const { data } = await movieApi.getGenresMovie();
      if (data) {
        return responseHandler.success(res, "Lấy thành công", data);
      } else {
        return responseHandler.badRequest(res, "Lấy không thành công");
      }
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  getVideoMovie: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const { data } = await movieApi.getVideosMovie(id);
      if (data) {
        return responseHandler.success(res, "Lấy thành công", data);
      } else {
        return responseHandler.badRequest(
          res,
          "Lấy thông tin không thành công"
        );
      }
    } catch (error) {
      responseHandler.error(res, error.message);
    }
  },
  getCreditsMovie: async (req, res) => {
    try {
      const { id } = req.params;
      const { data } = await movieApi.getCreditMovie(id);
      if (data) {
        return responseHandler.success(res, "Lấy thành công", data);
      } else {
        return responseHandler.success(res, "Lấy không thành công", data);
      }
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  getPoster: async (req, res) => {
    try {
      const { data } = await movieApi.getMovies("popular");
      if (data) {
        const poster = [...data.results][0];
        return responseHandler.success(res, "Lấy thành công", {
          data: poster,
        });
      } else {
        return responseHandler.badRequest(res, "Lấy không thành công");
      }
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
};
module.exports = movieController;
