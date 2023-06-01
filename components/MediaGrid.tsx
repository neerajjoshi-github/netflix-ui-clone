import React, { FC } from "react";
import MyListButton from "./MyListButton";
import Link from "next/link";

type MediaGridProps = {
  data: MoviesResult[] | ShowsResult[];
  title: string;
};

const MediaGrid: FC<MediaGridProps> = ({ data, title }) => {
  return (
    <div className="w-full px-2 sm:px-6">
      <h2 className="text-5xl sm:text-6xl font-semibold mb-6">
        <span className="relative">
          {title}
          <span className="absolute bottom-2 h-px w-[85%] right-0 bg-red-600" />
        </span>
      </h2>
      <div className="w-full grid grid-cols-2 sm:grid-cols-responsive-grid gap-x-2 gap-y-3 sm:gap-x-4 sm:gap-y-6">
        {data.map((media, index) => {
          return (
            <Link
              shallow
              key={media.id + index}
              href={`/dashboard/watch/${media.id}?medaiType=${
                "name" in media ? "tv" : "movie"
              }`}
            >
              <div
                className="w-full bg-slate-950 relative group cursor-pointer overflow-hidden"
                key={media.id + ("name" in media ? media.name : media.title)}
              >
                {(media.backdrop_path || media.poster_path) && (
                  <img
                    className="w-full h-auto"
                    src={`https://image.tmdb.org/t/p/original/${
                      media.poster_path || media.backdrop_path
                    }`}
                    alt={"name" in media ? media.name : media.title}
                  />
                )}
                <div
                  className={`${
                    media.backdrop_path || media.poster_path
                      ? "opacity-0 group-hover:opacity-100 bg-black/70"
                      : "opacity-100 bg-white/10"
                  } absolute bottom-0 left-0 px-2 w-full h-3/4  duration-500`}
                >
                  <h3 className="font-semibold mb-3">
                    {"name" in media ? media.name : media.title}
                  </h3>
                  <div className="flex justify-between text-sm mb-2">
                    <span>
                      Rating :{" "}
                      <span className="text-green-600">
                        {media.vote_average}
                      </span>
                    </span>
                    <span className="font-semibold">
                      {"name" in media
                        ? media.first_air_date.slice(0, 4)
                        : media.release_date.slice(0, 4)}
                    </span>
                    <MyListButton
                      id={media.id}
                      textSize="text-xs"
                      mediaType={"name" in media ? "tv" : "movie"}
                    />
                  </div>
                  <p className="text-xs max-xl:line-clamp-6">
                    {media.overview}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MediaGrid;
