import ImageBillboard from "<@>/components/ImageBillboard";
import MoviesList from "<@>/components/MoviesList";
import React from "react";

const fetchTv = async (params: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${params}?api_key=${process.env.MOVIESDB_API_KEY}&language=en-US&page=1`
  );
  return response.json();
};

const page = async () => {
  const { results: popularShowsResults }: ShowsData = await fetchTv("popular");
  const { results: topRatedShowsResults }: ShowsData = await fetchTv(
    "top_rated"
  );
  const { results: onAirShowsResults }: ShowsData = await fetchTv("on_the_air");

  const randomResult =
    popularShowsResults[Math.floor(Math.random() * popularShowsResults.length)];
  return (
    <div className="pb-32">
      <ImageBillboard data={randomResult} />
      <MoviesList movies={popularShowsResults} title="Popular Shows" />
      <MoviesList movies={topRatedShowsResults} title="Top Rated Shows" />
      <MoviesList movies={onAirShowsResults} title="Airing Now" />
    </div>
  );
};

export default page;
