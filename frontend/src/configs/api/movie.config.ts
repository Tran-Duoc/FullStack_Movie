import { Movie } from "../../types/movie.type";
import http from "../../utils/http.util";

export interface MovieQueryParams {
  mediaCategory: string;
  page: number;
}

interface MovieResponse<TData> {
  message: string;
  data: {
    data: TData;
  };
}

export interface TypeMovieResponse<TData> {
  message: string;
  data: TData;
}

interface Data {
  mediaCategory: string;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

// const getMovie = () => {};
// const getSimilarMovie = () => {};
// const getMovieGenres = () => {};
// const getVideoMovie = () => {};
// const getCreditsMovie = () => {};
export const getPoster = () => {
  return http.get<MovieResponse<Movie>>("movie/poster/movies");
};

export const getMovies = (queryParams: MovieQueryParams) => {
  return http.get<TypeMovieResponse<Data>>("movie", { params: queryParams });
};
