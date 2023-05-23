"use client";
import { useState, useEffect } from "react";
import useSWR, { Fetcher } from "swr";
import { fetchMovieDetails, fetchTvDetails } from "<@>/lib/fetch";
import MediaGrid from "<@>/components/MediaGrid";
import useStore from "<@>/store/store";
import Link from "next/link";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const fetcher: Fetcher = (url: string) =>
  fetch(url, { cache: "no-store" }).then((res) => res.json());

const Page = () => {
  const [favorites, addFavorites, removeFavorites] = useStore((state) => [
    state.favorites,
    state.addFavorites,
    state.removeFavorites,
  ]);

  const [myMovies, setMyMovies] = useState<MoviesResult[]>([]);
  const [myShows, setMyShows] = useState<ShowsResult[]>([]);
  const { data, error }: any = useSWR("/api/favorites", fetcher);

  useEffect(() => {});

  useEffect(() => {
    const fetchData = async () => {
      removeFavorites({ movies: [], shows: [] });
      for (let i = 0; i < data.favorites.length; i++) {
        if (data.favorites[i].mediaType === "movie") {
          const movieData = await fetchMovieDetails(data.favorites[i].id);
          console.log(favorites, "from inside movies use fee");
          addFavorites({
            movies: [movieData],
            shows: [],
          });
        } else if (data.favorites[i].mediaType === "tv") {
          const showData = await fetchTvDetails(data.favorites[i].id);
          addFavorites({
            shows: [showData],
            movies: [],
          });
        }
      }
    };

    if (data?.favorites.length > 0) {
      fetchData();
    }
  }, [data?.favorites]);

  console.log({ myShows, myMovies });
  console.log("favorites from store my list: ", favorites);

  return (
    <div className="py-20 h-screen">
      <div className="px-2 sm:px-10 h-full">
        {favorites.movies.length === 0 && favorites.shows.length === 0 && (
          <div className="w-full h-full flex flex-col gap-6 justify-center items-center">
            <h3 className="text-4xl sm:text-6xl md:text-7xl font-semibold">
              Your list is empty!
            </h3>
            <h4 className="text-2xl sm:text-4xl font-semibold">
              Add Something
            </h4>
            <div className="flex items-center gap-5">
              <Link
                className="text-lg flex group items-center"
                href="/dashboard/movies"
              >
                <MdKeyboardDoubleArrowLeft className="transition duration-300 group-hover:-translate-x-3" />
                <span className="underline underline-offset-2 mx-2">
                  Movies
                </span>
              </Link>
              <Link
                className="text-lg flex group items-center"
                href="/dashboard/shows"
              >
                <span className="underline underline-offset-2 mx-2">Shows</span>
                <MdKeyboardDoubleArrowRight className="transition duration-300 group-hover:translate-x-3" />
              </Link>
            </div>
          </div>
        )}
        {favorites.movies.length !== 0 && (
          <MediaGrid data={favorites.movies} title="My Movies" />
        )}
        {favorites.shows.length !== 0 && (
          <MediaGrid data={favorites.shows} title="My Shows" />
        )}
      </div>
    </div>
  );
};

export default Page;
