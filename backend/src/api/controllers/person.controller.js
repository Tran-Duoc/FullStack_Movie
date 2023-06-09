const { person } = require("../services/tmdb/tmbd.api");
const responseHandler = require("../utils/response.util");
const creditController = {
  getDetailPerson: async (req, res) => {
    try {
      const { id } = req.params;
      const { data } = await person.getDetail(id);
      if (data) {
        return responseHandler.success(res, "Lấy thành công", data);
      } else {
        return responseHandler.badRequest(res, "Lấy không thành công");
      }
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  getMediaOfPerson: async (req, res) => {
    try {
      const { id } = req.params;
      const { data } = await person.getMediaPerson(id);
      if (data) {
        return responseHandler.success(res, "Lấy thành công", data);
      } else {
        return responseHandler.badRequest(res, "Lấy không thành công");
      }
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
};

module.exports = creditController;
