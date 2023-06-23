import { useQuery } from "@tanstack/react-query";
import Title from "../Title/Title";
import { MovieQueryParams, getMovies } from "../../configs/api/movie.config";
import { useState } from "react";
import MovieCart from "../MovieCard/MovieCart";
import Button from "../Button/Button";
import LoadingCard from "../LoadingCard/LoadingCard";
const initialState = { page: 1, mediaCategory: "popular" };

const Container = () => {
  const [dataQuery, setDataQuery] = useState<MovieQueryParams>(initialState);

  const { data, isLoading } = useQuery({
    queryKey: ["movies category", dataQuery],
    queryFn: () => getMovies(dataQuery),
  });

  return (
    <div className="max-w-8xl mx-auto px-5 mt-10">
      <div className="flex flex-col gap-2">
        <div>
          <Title
            content="Popular Movie"
            className="text-xl md:text-3xl text-cyan-700 font-semibold  underline"
          />
          {isLoading ? (
            <LoadingCard />
          ) : (
            <div className=" mt-5 grid grid-cols-1  lg:grid-cols-4 gap-2  md:grid-cols-3 ">
              {data?.data.data.results.map((item) => {
                return (
                  <MovieCart
                    name={item.original_title}
                    poster={item.backdrop_path}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div className="my-10 text-center">
          <Button
            content="Load More"
            className="text-xl font-semibold bg-cyan-700 hover:bg-cyan-500 duration-200 px-4 py-2 rounded-2xl text-slate-900"
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
