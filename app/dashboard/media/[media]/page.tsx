"use client";
import {
  fetchMovieVideo,
  fetchTvVideo,
  fetchMovieDetails,
  fetchTvDetails,
} from "<@>/lib/fetch";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { Fragment } from "react";

const page = async () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const mediaType = searchParams?.get("medaiType");
  let videoResult;
  let details: MovieDetails | TvDetails | undefined;
  if (mediaType === "movie") {
    const videoData = await fetchMovieVideo(params?.media as string);
    details = await fetchMovieDetails(params?.media as string);
    videoResult = videoData.results[0];
    console.log("videoData", videoData.results[0]);
    console.log("details", details);
  } else if (mediaType === "tv") {
    const videoData = await fetchTvVideo(params?.media as string);
    videoResult = videoData.results[0];
    details = await fetchTvDetails(params?.media as string);
    console.log("Tv videoData", videoData.results[0]);
    console.log("Tv details", details);
  }

  return (
    <div className="w-full absolute top-0 left-0 pt-6">
      <div className="relative group">
        <Plyr
          source={{
            type: "video",
            sources: [
              {
                src: videoResult ? videoResult.key : "p5fnHWznTBQ",
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
        {videoResult ? null : (
          <div className="group-hover:opacity-100 opacity-0 flex transition duration-300 flex-col items-center absolute top-28 left-4 text-zinc-400">
            <p className="text-lg">404 : Video Not Found</p>
            <h4 className="text-2xl">Watch the cat!!</h4>
          </div>
        )}
      </div>

      {details && (
        <div className="mt-5 pt-8 px-10 flex relative justify-around gap-10 border-t border-gray-200">
          <img
            className="object-contain object-top sticky top-32 w-[350px] h-[600px]"
            src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
            alt=""
          />

          <div className="text-white flex flex-col gap-6 pb-10">
            {"original_title" in details ? (
              <h2 className="text-6xl font-semibold">
                {details.title}{" "}
                {details.original_title !== details.title && (
                  <span> [ {details.original_title} ]</span>
                )}
              </h2>
            ) : (
              <h2 className="text-6xl font-semibold">
                {details.name}{" "}
                {details.name !== details.original_name && (
                  <span> [{details.original_name}]</span>
                )}
              </h2>
            )}
            {details.tagline && (
              <h3 className="text-2xl mb-4">{details.tagline}</h3>
            )}
            <div className="flex flex-col gap-2 text-xl">
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

              <span>
                Rating :{" "}
                <span className="text-green-600">
                  {details.vote_average.toFixed(1)}
                </span>
              </span>
              <span className="flex gap-3">
                Genre :{" "}
                {details.genres.map((genre, index) => {
                  return (
                    <Fragment key={index}>
                      {index !== 0 ? "|" : ""}
                      <span>{genre.name}</span>
                    </Fragment>
                  );
                })}
              </span>
              {details.spoken_languages.length !== 0 && (
                <span>
                  Language : {details.spoken_languages[0].english_name}{" "}
                  {details.spoken_languages[0].english_name !==
                    details.spoken_languages[0].name &&
                    details.spoken_languages[0].name}
                </span>
              )}
            </div>
            <p className="text-lg text-zinc-300">{details.overview}</p>
            {"seasons" in details && (
              <div className="">
                <h2 className="text-4xl font-semibold my-6">Seasons</h2>
                <div className="grid grid-cols-5 gap-x-8 gap-y-4">
                  {details.seasons.map((season, index) => {
                    return (
                      <Fragment key={index}>
                        {season.name !== "Specials" &&
                          season.episode_count !== 0 && (
                            <div className="w-full relative pb-6">
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

                              <span className="block">{season.name}</span>
                              <span
                                className={`block ${
                                  season.poster_path ? "absolute bottom-0" : ""
                                }`}
                              >
                                Episodes - {season.episode_count}
                              </span>
                            </div>
                          )}
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
