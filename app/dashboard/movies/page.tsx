import ImageBillboard from "<@>/components/ImageBillboard";
import MoviesList from "<@>/components/MoviesList";
import React from "react";

const fetchMovies = async (params: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params}?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US&page=1`
  );
  return response.json();
};

const page = async () => {
  const { results: popularMoviesResults }: MoviesData = await fetchMovies(
    "popular"
  );
  const { results: topRatedMoviesResults }: MoviesData = await fetchMovies(
    "top_rated"
  );
  const { results: onAirMoviesResults }: MoviesData = await fetchMovies(
    "now_playing"
  );
  const { results: upcomingMoviesResults }: MoviesData = await fetchMovies(
    "upcoming"
  );

  const randomResult =
    popularMoviesResults[
      Math.floor(Math.random() * popularMoviesResults.length)
    ];
  return (
    <div className="pb-32">
      <ImageBillboard data={randomResult} />
      <MoviesList movies={popularMoviesResults} title="Popular Movies" />
      <MoviesList movies={topRatedMoviesResults} title="Top Rated Movies" />
      <MoviesList movies={onAirMoviesResults} title="Newly Arrived" />
      <MoviesList movies={upcomingMoviesResults} title="Upcoming Movies" />
    </div>
  );
};

export default page;
