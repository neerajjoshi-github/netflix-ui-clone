import Billboard from "<@>/components/Billboard";
import MediaList from "<@>/components/MediaList";
import React from "react";
import { fetchMovies, fetchTv } from "<@>/lib/fetch";
import Search from "<@>/components/Search";

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
    <div className="w-full pb-12">
      <Billboard />
      <MediaList title="See Again" data={topRatedMoviesResults} />
      <MediaList title="Popular Movies" data={popularMoviesResults} />
      <MediaList title="Popular Shows" data={popularShowsResults} />
      <MediaList title="Top Rated Shows" data={topRatedShowsResults} />
    </div>
  );
};

export default page;
