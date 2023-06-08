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
  getGenresMovie: async () => {
    const category = movie.genre_endpoint();
    return await get(category);
  },
  getVideosMovie: async (idMovie) => {
    const video_id = movie.video_endpoint(idMovie);
    return await get(video_id);
  },
};
const tvApi = {
  getTVs: async (mediaCategory, params) => {
    const category = tv.tv_endpoint(mediaCategory);
    return await get(category, params);
  },
  getTV: async (idTV) => {
    const id_param = tv.tv_endpoint(idTV);
    return await get(id_param);
  },
  getSimilarTV: async (id_tv, params) => {
    const id = tv.tv_endpoint_similar(id_tv);
    return await get(id, params);
  },
  getGenresTV: async () => {
    const category = tv.tv_genre_endpoint();
    return await get(category);
  },
  getVideosTV: async (id_tv) => {
    const video_tv = tv.tv_video_endpoint(id_tv);
    return await get(video_tv);
  },
};

module.exports = {
  movieApi,
  tvApi,
};
