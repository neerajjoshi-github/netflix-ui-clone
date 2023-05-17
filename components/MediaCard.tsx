import React, { FC, Fragment } from "react";
import { BsFillPlayFill, BsChevronDown } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { BiLike, BiDislike } from "react-icons/bi";
import { genres } from "<@>/data/genres";
import Link from "next/link";

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
      className={`${isEnd ? "hover:-translate-x-16 " : ""}
      ${isStart ? "hover:translate-x-16 " : ""} 
      cursor-pointer py-10 hover:scale-125 hover:z-[1] transition duration-500 group relative `}
    >
      <Link
        href={`/dashboard/media/${media.id}?medaiType=${
          "name" in media ? "tv" : "movie"
        }`}
      >
        <div className="flex group h-[24vh] sm:h-[32vh] hover:border-white hover:border hover:rounded-t-md">
          <img
            className="group-hover:hidden w-full h-full object-cover object-center rounded-md"
            src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
            alt=""
          />
          <div className="overflow-hidden group-hover:flex flex-col hidden w-full h-full bg-black rounded-t-md">
            <img
              className="w-full h-[65%] object-cover object-top rounded-t-md"
              src={`https://image.tmdb.org/t/p/original/${media.poster_path}`}
              alt=""
            />
            <div className="h-[35%] bg-slate-950 p-2 flex flex-col gap-1">
              <h2 className="font-bold">
                {"name" in media ? media.name : media.title}
              </h2>
              <div className="flex text-sm gap-3">
                <span className="text-green-600 font-semibold ">
                  {media.vote_average}
                </span>
                <span>
                  {"name" in media
                    ? media.first_air_date.slice(0, 4)
                    : media.release_date.slice(0, 4)}
                </span>
              </div>
              <div className="flex flex-wrap  items-center text-xs gap-3">
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
