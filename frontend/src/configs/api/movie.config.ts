import { Movie } from "../../types/movie.type";
import http from "../../utils/http.util";

interface MovieResponse<TData> {
  message: string;
  data: {
    data: TData;
  };
}

// const getMovies = () => {};
// const getMovie = () => {};
// const getSimilarMovie = () => {};
// const getMovieGenres = () => {};
// const getVideoMovie = () => {};
// const getCreditsMovie = () => {};
export const getPoster = () => {
  return http.get<MovieResponse<Movie>>("movie/poster/movies");
};
