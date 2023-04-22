import MovieCard from "<@>/components/MovieCard";
import React from "react";

const movies = async (pageNum: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US&page=${pageNum}`
  );
  return response.json();
};

const page = async () => {
  const page1 = await movies(1);
  const page2 = await movies(2);
  return (
    <div className="py-16 md:py-20 px-4 md:px-10">
      <h2 className="text-5xl md:text-6xl font-semibold mb-6">See Again</h2>
      <div className="grid grid-cols-4 gap-x-6 gap-y-10">
        {page1.results.map((result: any) => {
          return <MovieCard key={result.id} data={result} />;
        })}
        {page2.results.map((result: any) => {
          return <MovieCard key={result.id} data={result} />;
        })}
      </div>
    </div>
  );
};

export default page;
