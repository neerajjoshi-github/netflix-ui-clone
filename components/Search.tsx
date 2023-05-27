"use client";
import React, { useState, FC, useRef } from "react";
import { fetchBySearch } from "<@>/lib/fetch";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";

type SearchType = {
  closeSearchModal: () => void;
};

const Search: FC<SearchType> = ({ closeSearchModal }) => {
  const router = useRouter();
  const [results, setResults] = useState<ShowsResult[] | MoviesResult[]>([]);
  return (
    <div
      onClick={() => {
        closeSearchModal();
      }}
      className="z-[40] overflow-hidden fixed top-0 left-0 w-screen h-screen bg-slate-800/70 backdrop-blur-sm flex items-center justify-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-full sm:h-[80%] w-full sm:w-[80%] md:w-[500px] bg-slate-900/70 px-6 pt-10 pb-8 rounded-none sm:rounded-md flex flex-col gap-4"
      >
        <AiOutlineClose
          onClick={closeSearchModal}
          className="absolute top-2 right-2 w-4 h-4 cursor-pointer hover:text-red-600 "
        />

        <div>
          <label className="sr-only" htmlFor="search">
            Search
          </label>
          <input
            onChange={async (e) => {
              console.log(e.target.value);
              const data = await fetchBySearch(e.target.value);
              setResults(data.results);
            }}
            className="w-full bg-transparent border border-white text-lg p-2"
            placeholder="Last of Us"
            id="serach"
            type="text"
          />
        </div>

        <div className="w-full flex-1 overflow-auto">
          {results.length !== 0 &&
            results.map((media, index) => {
              return (
                <div
                  onClick={() => {
                    router.push(
                      `/dashboard/watch/${media.id}?medaiType=${
                        "name" in media ? "tv" : "movie"
                      }`
                    );
                    closeSearchModal();
                  }}
                  key={media.id + index}
                  className="h-1/3 w-full py-2 flex gap-2 border-b border-white cursor-pointer "
                >
                  <div className="h-full w-1/4">
                    <img
                      className="w-full h-full object-cover"
                      src={`https://image.tmdb.org/t/p/original/${
                        media.poster_path || media.backdrop_path
                      }`}
                      alt={"name" in media ? media.name : media.title}
                    />
                  </div>
                  <div className="h-full flex-1 pr-2">
                    <h3 className="text-xl line-clamp-1">
                      {"name" in media ? media.name : media.title}
                    </h3>
                    <div className="flex justify-between mt-1">
                      <span>
                        Rating :{" "}
                        <span className="text-green-600">
                          {media.vote_average?.toFixed(1)}
                        </span>
                      </span>

                      <span className="font-semibold">
                        {"name" in media
                          ? media?.first_air_date?.slice(0, 4)
                          : media?.release_date?.slice(0, 4)}
                      </span>
                    </div>
                    <p className="text-xs line-clamp-3 mt-2">
                      {media.overview}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Search;
