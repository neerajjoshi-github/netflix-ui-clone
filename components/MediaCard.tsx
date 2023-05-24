import React, { FC, Fragment } from "react";
import { genres } from "<@>/data/genres";
import Link from "next/link";
import MyListButton from "./MyListButton";

type MovieCardProps = {
  media: MoviesResult | ShowsResult;
  isStart: boolean;
  isEnd: boolean;
};

const MediaCard: FC<MovieCardProps> = ({ media, isStart, isEnd }) => {
  const currenMediaGenres: string[] = [];
  for (let i = 0; i < media.genre_ids.length; i++) {
    currenMediaGenres.push(genres[media.genre_ids[i]]);
  }

  return (
    <div
      className={`${isEnd ? "lg:hover:-translate-x-12 " : ""}
      ${isStart ? "lg:hover:translate-x-12 " : ""} 
      cursor-pointer py-10 lg:hover:scale-125 hover:z-[1] transition duration-500 group relative `}
    >
      <Link
        href={`/dashboard/watch/${media.id}?medaiType=${
          "name" in media ? "tv" : "movie"
        }`}
      >
        <div className="flex h-[24vh] sm:h-[32vh] group-hover:border-white border border-transparent hover:rounded-t-md">
          <img
            className="lg:group-hover:hidden w-full h-full object-cover object-center rounded-md"
            src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
            alt={"name" in media ? media.name : media.title}
          />
          <div className="overflow-hidden lg:group-hover:flex flex-col hidden w-full h-full bg-black rounded-t-md">
            <img
              className="w-full h-[65%] object-cover object-top rounded-t-md"
              src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
              alt={"name" in media ? media.name : media.title}
            />
            <div className="h-[35%] w-full pl-2 pr-1 md:pr-2 flex flex-col gap-1">
              <h2 className="w-full font-bold whitespace-nowrap overflow-hidden text-ellipsis ">
                {"name" in media ? media.name : media.title}
              </h2>
              <div className="flex items-center text-sm gap-3">
                <span className="text-green-600 font-semibold ">
                  {media.vote_average * 10}%
                </span>
                <span className="font-semibold">
                  {"name" in media
                    ? media.first_air_date.slice(0, 4)
                    : media.release_date.slice(0, 4)}
                </span>
                <MyListButton
                  buttonClassname="ml-auto"
                  textSize="text-xs"
                  id={media.id}
                  mediaType={"name" in media ? "tv" : "movie"}
                />
              </div>
              <div className="flex h-[15px] overflow-hidden  flex-wrap  items-center text-xs gap-2">
                {currenMediaGenres.map((genre, index) => {
                  return (
                    <Fragment key={index}>
                      {index !== 0 ? "|" : ""}
                      <span className="flex items-center">{genre}</span>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;
