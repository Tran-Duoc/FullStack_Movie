const https = require("../configs/axios.config.js");

const get = async (endpoint, params) => {
  return await https.get(endpoint, {
    params: params,
  });
};

const mediaType = {
  movie: "movie",
  tv: "tv",
};

const mediaCategory = {
  popular: "popular",
  top_rated: "top_rated",
  trending: "trending",
  now_playing: "now_playing",
};

module.exports = {
  mediaCategory,
  mediaType,
  get,
};
