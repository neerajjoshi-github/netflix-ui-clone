import ImageBillboard from "<@>/components/ImageBillboard";
import MediaList from "<@>/components/MediaList";
import React from "react";
import { fetchTv, fetchMovies } from "<@>/lib/fetch";

const page = async () => {
  const { results: onAirShowsResults }: ShowsData = await fetchTv("on_the_air");
  const { results: onAirMoviesResults }: MoviesData = await fetchMovies(
    "now_playing"
  );
  const { results: upcomingMoviesResults }: MoviesData = await fetchMovies(
    "upcoming"
  );

  const randomResult =
    onAirShowsResults[Math.floor(Math.random() * onAirShowsResults.length)];
  return (
    <div className="pb-32">
      <ImageBillboard data={randomResult} />
      <MediaList data={onAirShowsResults} title="Shows Airing Now" />
      <MediaList data={onAirMoviesResults} title="Newly Arrived Movies" />
      <MediaList data={upcomingMoviesResults} title="Upcoming Movies" />
    </div>
  );
};

export default page;
