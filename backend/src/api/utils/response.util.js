const responseWithData = (res, statusCode, data) => {
  return res.status(statusCode).json(data);
};

const error = (res, message) => {
  return responseWithData(res, 500, {
    status: 500,
    message: message,
  });
};

const success = (res, message, data) => {
  return responseWithData(res, 200, {
    message: message,
    data: data,
  });
};

const created = (res, message, data) => {
  return responseWithData(res, 201, {
    data: data,
  });
};

const badRequest = (res, message) => {
  return responseWithData(res, 400, message, {
    status: 400,
    message: message,
  });
};

const unauthorize = (res) =>
  responseWithData(res, 401, {
    status: 401,
    message: "Unathorized",
  });

module.exports = {
  error,
  badRequest,
  success,
  unauthorize,
  created,
};
