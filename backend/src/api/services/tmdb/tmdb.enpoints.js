const { mediaType, mediaCategory } = require("../../../configs/tmdb.config");

// explain: mediaType là "movie"
const movie = {
  movie_endpoint: (endpoint) => {
    return `${mediaType.movie}/${endpoint}`;
  },
  movie_endpoint_similar: (endpoint) => {
    return `${mediaType.movie}/${endpoint}/similar`;
  },
  genre_endpoint: () => {
    return `genre/movie/list`;
  },
  video_endpoint: (idMovie) => {
    return `${mediaType.movie}/${idMovie}/videos`;
  },
};

// explain: mediaType là "tv"
const tv = {
  tv_endpoint: (endpoint) => {
    return `${mediaType.tv}/${endpoint}`;
  },
  tv_endpoint_similar: (endpoint) => {
    return `${mediaType.tv}/${endpoint}/similar`;
  },
  tv_genre_endpoint: () => {
    return `genre/tv/list`;
  },
  tv_video_endpoint: (id_tv) => {
    return `${mediaType.tv}/${id_tv}/videos`;
    return;
  },
};

module.exports = {
  movie,
  tv,
};
