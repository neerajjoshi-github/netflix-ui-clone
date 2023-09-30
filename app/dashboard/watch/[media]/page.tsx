"use client";
import {
  fetchMovieVideo,
  fetchTvVideo,
  fetchMovieDetails,
  fetchTvDetails,
} from "<@>/lib/fetch";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { Fragment } from "react";
import MyListButton from "<@>/components/MyListButton";
import MediaPageSkeleton from "<@>/components/skeletons/MediaPageSkeleton";

const page = () => {
  const [videoResult, setVideoResult] = useState<VideoResult | null>(null);
  const [details, setDetails] = useState<MovieDetails | TvDetails | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const searchParams = useSearchParams();
  const mediaType = searchParams?.get("medaiType");

  const fetchDetails = async () => {
    if (mediaType === "movie") {
      const videoData = await fetchMovieVideo(params?.media as string);
      const fetchedDetails = await fetchMovieDetails(params?.media as string);
      setDetails(fetchedDetails as MovieDetails);
      setVideoResult(videoData.results[0]);
    } else if (mediaType === "tv") {
      const videoData = await fetchTvVideo(params?.media as string);
      setVideoResult(videoData.results[0]);
      const fetchedDetails = await fetchTvDetails(params?.media as string);
      setDetails(fetchedDetails as TvDetails);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      {loading ? (
        <MediaPageSkeleton />
      ) : (
        <div className="w-full absolute top-0 left-0 pt-6">
          <div className="relative group">
            <Plyr
              poster={details?.poster_path || ""}
              source={{
                type: "video",
                sources: [
                  {
                    src: videoResult
                      ? videoResult.key
                      : "eZTS4cL4Euo?si=EO8zl9tQdMb4cRU0",
                    provider: videoResult
                      ? videoResult.site === "Vimeo"
                        ? "vimeo"
                        : "youtube"
                      : "youtube",
                  },
                ],
              }}
              options={{
                autoplay: true,
                ratio: "16:9",
              }}
            />
            {!videoResult && (
              <div className="flex transition duration-300 flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-200 backdrop-blur-md bg-zinc-600 rounded-md p-2">
                <p className="text-lg">404 : Video Not Found</p>
                <h4 className="text-2xl">Watch the cat!!</h4>
              </div>
            )}
          </div>

          {details && (
            <div className="mt-5 pt-8 pb-5 px-1 md:px-4 lg:px-10 grid grid-cols-details grid-row-3 relative gap-1 md:gap-x-4 md:gap-y-2  lg:gap-x-10 lg:gap-y-4 border-t border-gray-200">
              <img
                className="row-span-1 md:row-span-4 object-contain object-top flex md:sticky md:top-32"
                src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
                alt=""
              />

              <div className="col-span-2 min-w-[180px] ml-2 xs:col-span-1 text-white flex flex-col gap-[0.3rem] md:gap-5">
                {"original_title" in details ? (
                  <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold">
                    {details.title}{" "}
                    {details.original_title !== details.title && (
                      <span> [ {details.original_title} ]</span>
                    )}
                  </h2>
                ) : (
                  <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold">
                    {details.name}{" "}
                    {details.name !== details.original_name && (
                      <span> [{details.original_name}]</span>
                    )}
                  </h2>
                )}
                {details.tagline && (
                  <h3 className="text-lg md:text-2xl mb-1">
                    {details.tagline}
                  </h3>
                )}
                <div className="flex flex-col gap-1 sm:gap-2 text-sm md:text-lg lg:text-xl mt-1">
                  {"original_title" in details ? (
                    <>
                      <span className="">
                        Release date : {details.release_date}
                      </span>
                      <span className="">Runtime : {details.runtime}min</span>
                    </>
                  ) : (
                    <>
                      <span className="">
                        First Air Date : {details.first_air_date}
                      </span>
                      <span className="">
                        Episode Runtime : {details.episode_run_time[0]}min
                      </span>
                    </>
                  )}

                  <span className="">
                    Rating :{" "}
                    <span className="text-green-600 ">
                      {details.vote_average.toFixed(1)}
                    </span>
                  </span>
                  <div className="flex flex-wrap gap-1 sm:gap-3">
                    <span className="whitespace-nowrap mr-2">Genre : </span>

                    {details.genres.map((genre, index) => {
                      return (
                        <Fragment key={index}>
                          {index !== 0 ? "|" : ""}
                          <span>{genre.name}</span>
                        </Fragment>
                      );
                    })}
                  </div>
                  {details.spoken_languages.length !== 0 && (
                    <span className="">
                      Language : {details.spoken_languages[0].english_name}{" "}
                      {details.spoken_languages[0].english_name !==
                        details.spoken_languages[0].name &&
                        details.spoken_languages[0].name}
                    </span>
                  )}
                </div>
                <MyListButton
                  buttonClassname="max-w-[180px] lg:max-w-[250px]"
                  textSize="text-base"
                  id={details.id}
                  mediaType={"original_title" in details ? "movie" : "tv"}
                />
              </div>
              <p className="col-span-2 pt-4 md:pt-2 md:col-span-1 ml-2 text-xs sm:text-sm md:text-base lg:text-lg text-zinc-300">
                {details.overview}
              </p>
              {"seasons" in details && (
                <div className="col-span-2 md:col-span-1">
                  <h2 className="text-4xl font-semibold my-6">Seasons</h2>
                  <div className="grid grid-cols-seasons-grid gap-x-8 gap-y-4">
                    {details.seasons.map((season, index) => {
                      return (
                        <Fragment key={index}>
                          {season.name !== "Specials" &&
                            season.episode_count !== 0 && (
                              <div className="w-full relative bg-slate-950">
                                <div className="relative group overflow-hidden cursor-pointer w-full">
                                  <img
                                    className="w-full h-auto"
                                    src={`https://image.tmdb.org/t/p/original/${season.poster_path}`}
                                    alt=""
                                  />
                                  <div className="group-hover:opacity-100 opacity-0 flex flex-col gap-2 group-hover:translate-y-0 translate-y-[400px] transition duration-500 absolute bottom-0 py-2 h-3/4 w-full bg-black/70">
                                    <h3 className="font-semibold truncate">
                                      {season.name}
                                    </h3>
                                    {season.air_date && (
                                      <span className="text-sm">
                                        <span className="font-semibold">
                                          Air Date
                                        </span>{" "}
                                        : {season.air_date}
                                      </span>
                                    )}
                                    <p className="text-xs line-clamp-5 ">
                                      {season.overview}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-1 px-2 pb-2 text-sm sm:text-base">
                                  <span>Season - {season.season_number}</span>
                                  <span>Episodes - {season.episode_count}</span>
                                </div>
                              </div>
                            )}
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default page;
