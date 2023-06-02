const { movie, tv } = require("./tmdb.enpoints");
const { get } = require("../../../configs/axios.config");

const movieApi = {
  getMovies: async (mediaCategory, params) => {
    const category = movie.movie_endpoint(mediaCategory);
    return await get(category, params);
  },
  getMovie: async (idMovie) => {
    const id_param = movie.movie_endpoint(idMovie);
    return await get(id_param);
  },
  getSimilarMovie: async (idMovie, params) => {
    const id_param = movie.movie_endpoint_similar(idMovie);
    return await get(id_param, params);
  },
};
const tvApi = {
  getTVs: async (mediaCategory, params) => {
    const category = tv.tv_endpoint(mediaCategory);
    return await get(category, { params });
  },
  getTV: async (idTV) => {
    const id_param = tv.tv_endpoint(idTV);
    return await get(id_param);
  },
};

module.exports = {
  movieApi,
  tvApi,
};
