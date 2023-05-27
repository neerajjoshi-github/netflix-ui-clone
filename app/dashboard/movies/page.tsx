import ImageBillboard from "<@>/components/ImageBillboard";
import MediaList from "<@>/components/MediaList";
import React from "react";
import { fetchMovies } from "<@>/lib/fetch";

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
    <div className="pb-12">
      <ImageBillboard data={randomResult} />
      <MediaList data={popularMoviesResults} title="Popular Movies" />
      <MediaList data={topRatedMoviesResults} title="Top Rated Movies" />
      <MediaList data={onAirMoviesResults} title="Newly Arrived" />
      <MediaList data={upcomingMoviesResults} title="Upcoming Movies" />
    </div>
  );
};

export default page;
