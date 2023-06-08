const jwt = require("jsonwebtoken");
const responseHandler = require("../utils/response.util");

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (authHeader) {
      token = authHeader.split(" ")[1] || authHeader;
      if (!token) return responseHandler.badRequest(res, "Unauthorized");
      jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, payload) => {
        if (err) {
          return responseHandler.badRequest(res, "you are not authorized");
        }
        req.user = payload;
        next();
      });
    }
  } catch (error) {
    return responseHandler.error(res, error.message);
  }
};

module.exports = {
  auth,
};
