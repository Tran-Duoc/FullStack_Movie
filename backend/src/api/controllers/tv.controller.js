const { tvApi } = require("../services/tmdb/tmbd.api");
const responseHandler = require("../utils/response.util");

const tvController = {
  getListTV: async (req, res) => {
    try {
      const { page, mediaCategory } = req.query;
      const { data } = await tvApi.getTVs(mediaCategory, { page });
      if (data) {
        return responseHandler.success(res, "Lấy thành công", data);
      } else {
        return responseHandler.badRequest(res, "Không thể lấy data");
      }
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  getDetailTV: async (req, res) => {
    try {
      const { id } = req.params;
      const { data } = await tvApi.getTV(id);
      if (data) {
        return responseHandler.success(res, "Lấy thành công", data);
      } else {
        return responseHandler.badRequest(res, "Không thể lấy data");
      }
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  getSimilarTV: async (req, res) => {
    try {
      const { id } = req.params;
      const { page } = req.query;
      const { data } = await tvApi.getSimilarTV(id, { page });
      if (data) {
        return responseHandler.success(res, "Lấy thành công", data);
      } else {
        return responseHandler.badRequest(res, "Không thể lấy data");
      }
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  getGenresTV: async (req, res) => {
    try {
      const { data } = await tvApi.getGenresTV();
      if (data) {
        return responseHandler.success(res, "Lấy thành công", data);
      } else {
        return responseHandler.badRequest(res, "Không thể lấy data");
      }
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  getTvVideos: async (req, res) => {
    try {
      const { id } = req.params;
      const { data } = await tvApi.getVideosTV(id);
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

module.exports = tvController;
