import Billboard from "<@>/components/Billboard";
import DashboardNavbar from "<@>/components/DashboardNavbar";
import MediaList from "<@>/components/MediaList";
import React from "react";
import axios from "axios";
import { fetchMovies, fetchTv } from "<@>/lib/fetch";

const page = async () => {
  const { results: popularMoviesResults }: MoviesData = await fetchMovies(
    "popular"
  );
  const { results: topRatedMoviesResults }: MoviesData = await fetchMovies(
    "top_rated"
  );
  const { results: popularShowsResults }: ShowsData = await fetchTv("popular");
  const { results: topRatedShowsResults }: ShowsData = await fetchTv(
    "top_rated"
  );
  return (
    <div className="w-screen pb-32">
      <Billboard />
      <MediaList title="See Again" data={topRatedMoviesResults} />
      <MediaList title="Popular Movies" data={popularMoviesResults} />
      <MediaList title="Popular Shows" data={popularShowsResults} />
      <MediaList title="Top Rated Shows" data={topRatedShowsResults} />
    </div>
  );
};

export default page;

// `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.MOVIESDB_API_KEY}`
