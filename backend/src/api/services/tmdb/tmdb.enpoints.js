const { mediaType, mediaCategory } = require("../../../configs/tmdb.config");

// explain: mediaType là "movie"
const movie = {
  movie_endpoint: (endpoint) => {
    return `${mediaType.movie}/${endpoint}`;
  },
  movie_endpoint_similar: (endpoint) => {
    return `${mediaType.movie}/${endpoint}/similar`;
  },
};

// explain: mediaType là "tv"
const tv = {
  tv_endpoint: (endpoint) => {
    return `${mediaType.tv}/${endpoint}`;
  },
};

module.exports = {
  movie,
  tv,
};
