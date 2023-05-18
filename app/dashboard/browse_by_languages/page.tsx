"use client";
import React, { useState, useEffect } from "react";
import ImageBillboard from "<@>/components/ImageBillboard";
import { fetchByLanguage } from "<@>/lib/fetch";
import { languages, LanguagesType } from "<@>/data/languages";
import ReactSelect, { SingleValue } from "react-select";

const page = () => {
  const [data, setData] = useState<MoviesResult[]>([]);

  console.log(data[0]);
  const fetchData = async (language: string) => {
    const data = await fetchByLanguage(language);
    console.log("fetchedData", data);
    setData(data.results);
  };
  useEffect(() => {
    fetchData(languages[0].value);
  }, []);
  const onChangeHandler = async (e: SingleValue<LanguagesType>) => {
    if (e) fetchData(e.value);
  };
  return (
    <div className="pb-32 relative">
      <div className="absolute top-24 right-10 z-[20]">
        <ReactSelect
          options={languages}
          onChange={onChangeHandler}
          unstyled
          classNames={{
            control: (state) =>
              `border border-gray-600 w-[150px] sm:w-[250px] bg-black  p-2 !border  font-semibold text-sm sm:text-lg !cursor-pointer`,
            option: (state) =>
              `${
                state.isSelected ? "font-bold" : "font-normal"
              } !cursor-pointer bg-black p-2 text-lg hover:bg-slate-800`,
            menu: () => "border border-gray-500 py-2 !z-20 bg-black",
          }}
          defaultValue={languages[0]}
        />
      </div>
      {data.length !== 0 && <ImageBillboard data={data[0]} />}
      <div className="w-full px-6">
        <h2 className="text-6xl font-semibold mb-6">
          <span className="relative">
            Movies
            <span className="absolute bottom-2 h-px w-[85%] right-0 bg-red-600" />
          </span>
        </h2>
        <div className="w-full grid grid-cols-responsive-grid gap-x-4 gap-y-6">
          {data.map((movie, index) => {
            return (
              <div
                className="w-full bg-slate-950 relative group cursor-pointer overflow-hidden"
                key={movie.id}
              >
                {(movie.backdrop_path || movie.poster_path) && (
                  <img
                    className="w-full h-auto"
                    src={`https://image.tmdb.org/t/p/original/${
                      movie.poster_path || movie.backdrop_path
                    }`}
                    alt={movie.title}
                  />
                )}
                <div
                  className={`${
                    movie.backdrop_path || movie.poster_path
                      ? "opacity-0 group-hover:opacity-100 bg-black/70"
                      : "opacity-100 bg-white/10"
                  } absolute bottom-0 left-0 px-2 w-full h-3/4  duration-500`}
                >
                  <h3 className="font-semibold mb-3">{movie.title}</h3>
                  <div className="flex justify-between text-sm mb-2">
                    <span>
                      Rating :{" "}
                      <span className="text-green-600">
                        {movie.vote_average}
                      </span>
                    </span>
                    <span>{movie.release_date}</span>
                  </div>
                  <p className="text-xs max-xl:line-clamp-6">
                    {movie.overview}
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

export default page;
