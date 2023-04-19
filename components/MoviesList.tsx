import React, { useEffect } from "react";
import MovieCard from "./MovieCard";

const movies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US&page=1`
  );
  return response.json();
};

const MoviesList = async () => {
  const data = await movies();
  //   console.log(data);
  return (
    <div className="mt-8 p-6 px-16 cursor-pointer">
      <h2 className="cursor-pointer group flex gap-2 items-end">
        <span className="text-4xl font-semibold">See Again</span>
        <span className="opacity-0 group-hover:opacity-100 -translate-x-14 group-hover:translate-x-0 transition duration-300">
          Explore all
        </span>
      </h2>

      {/* <div className="overflow-x-hidden"> */}
      <div className="mt-8 flex gap-8 overflow-x-auto mb-60 hide-scrollbar">
        {data.results.map((movie: any) => {
          return <MovieCard data={movie} />;
        })}
      </div>
      {/* </div> */}
    </div>
  );
};

export default MoviesList;

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
