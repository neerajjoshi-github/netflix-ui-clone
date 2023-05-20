"use client";
import { useState, useEffect } from "react";
import useSWR, { Fetcher } from "swr";
import { fetchMovieDetails, fetchTvDetails } from "<@>/lib/fetch";
import MediaGrid from "<@>/components/MediaGrid";

const fetcher: Fetcher = (url: string) => fetch(url).then((res) => res.json());

const Page = () => {
  const [myMovies, setMyMovies] = useState<MoviesResult[]>([]);
  const [myShows, setMyShows] = useState<ShowsResult[]>([]);
  const { data, error }: any = useSWR("/api/favorites", fetcher);
  console.log("data", data, "error", error);

  useEffect(() => {
    const fetchData = async () => {
      setMyMovies([]);
      setMyShows([]);
      for (let i = 0; i < data?.favorites.length; i++) {
        if (data?.favorites[i].mediaType === "movie") {
          const movieData = await fetchMovieDetails(data?.favorites[i].id);
          setMyMovies((prevMovies) => [...prevMovies, movieData]);
        } else if (data?.favorites[i].mediaType === "tv") {
          const showData = await fetchTvDetails(data?.favorites[i].id);
          setMyShows((prevShows) => [...prevShows, showData]);
        }
      }
    };

    if (data?.favorites.length > 0) {
      fetchData();
    }
  }, [data?.favorites]);

  console.log({ myShows, myMovies });

  return (
    <div className="py-20">
      <div className="px-2 sm:px-10">
        {myMovies.length !== 0 && (
          <MediaGrid data={myMovies} title="My Movies" />
        )}
        {myShows.length !== 0 && <MediaGrid data={myShows} title="My Shows" />}
      </div>
    </div>
  );
};

export default Page;
