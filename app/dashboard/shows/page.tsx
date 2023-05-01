import ImageBillboard from "<@>/components/ImageBillboard";
import MediaList from "<@>/components/MediaList";
import React from "react";
import { fetchTv } from "<@>/lib/fetch";

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
      <MediaList data={popularShowsResults} title="Popular Shows" />
      <MediaList data={topRatedShowsResults} title="Top Rated Shows" />
      <MediaList data={onAirShowsResults} title="Airing Now" />
    </div>
  );
};

export default page;
