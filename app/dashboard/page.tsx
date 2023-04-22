import Billboard from "<@>/components/Billboard";
import DashboardNavbar from "<@>/components/DashboardNavbar";
import MoviesList from "<@>/components/MoviesList";
import React from "react";
import axios from "axios";

const popularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US&page=1`
  );
  return response.json();
};
const trandingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.MOVIESDB_API_KEY}`
  );
  return response.json();
};
const trandingShows = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.MOVIESDB_API_KEY}`
  );
  return response.json();
};

const page = async () => {
  const popularMoviesData = await popularMovies();
  const trandingMoviesData = await trandingMovies();
  const trandingShowsData = await trandingShows();
  return (
    <div className="w-screen pb-32">
      <Billboard />
      <MoviesList title="See Again" movies={popularMoviesData.results} />
      <MoviesList title="Tranding Movies" movies={trandingMoviesData.results} />
      <MoviesList title="Tranding Shows" movies={trandingShowsData.results} />
    </div>
  );
};

export default page;

// `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.MOVIESDB_API_KEY}`
