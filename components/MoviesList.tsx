import React from "react";
import MovieCard from "./MovieCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiChevronDoubleRight } from "react-icons/hi";
import ScrollableDiv from "./ScrollableDiv";

const movies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US&page=1`
  );
  return response.json();
};

const MoviesList = async () => {
  const data = await movies();
  return (
    <div className="mt-8 pl-10 pr-8">
      <h2 className="flex gap-1 items-end">
        <span className="cursor-pointer text-4xl peer font-semibold">
          See Again
        </span>
        <span className="ml-2 text-lg opacity-0 peer-hover:opacity-100 -translate-x-14 peer-hover:translate-x-0 transition duration-300">
          Explore all
        </span>
        <span className="-translate-x-[85px] peer-hover:translate-x-0 transition duration-300">
          <HiChevronDoubleRight className="w-7 h-7" />
        </span>
      </h2>

      <ScrollableDiv>
        {data.results.map((movie: any) => {
          return <MovieCard data={movie} />;
        })}
      </ScrollableDiv>
    </div>
  );
};

export default MoviesList;

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
