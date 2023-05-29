const jwt = require("jsonwebtoken");
const responseHandler = require("../utils/response.util");
const user = require("../models/user.model");

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (authHeader) {
      token = authHeader || authHeader.split(" ")[1];
      console.log(token);

      if (!token) return responseHandler.badRequest(res, "Unauthorized");
      jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, payload) => {
        if (err) {
          return responseHandler.badRequest(res, "you are not authorized");
        }
        console.log(payload);
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
