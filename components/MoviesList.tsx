"use client";

import React, { FC, useEffect, useRef } from "react";
import MovieCard from "./MovieCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiChevronDoubleRight } from "react-icons/hi";
import ScrollableDiv from "./ScrollableDiv";
import { register } from "swiper/element/bundle";
import type Swiper from "swiper";
import Link from "next/link";

register();

type MoviesListProps = {
  movies: any;
  title: string;
};

const MoviesList: FC<MoviesListProps> = ({ movies, title }) => {
  const swiperRef = useRef<Swiper>(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      slidesPerView: 4,
      slidesPerGroup: 4,
      loop: true,
      spaceBetween: 15,
      speed: 500,
    };
    if (swiperContainer) {
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }
  }, []);
  return (
    <div className="mt-8 sm:mt-16 px-2 sm:pl-10 sm:pr-8 ">
      <Link href={`/dashboard/browse/l`}>
        <h2 className="flex gap-1 items-end mb-8">
          <span className="z-20 cursor-pointer text-2xl sm:text-4xl peer font-semibold">
            {title}
          </span>
          <span className="ml-2 text-lg opacity-0 peer-hover:opacity-100 -translate-x-14 peer-hover:translate-x-0 transition duration-300">
            Explore all
          </span>
          <span className="-translate-x-[85px] peer-hover:translate-x-0 transition duration-300">
            <HiChevronDoubleRight className="w-7 h-7" />
          </span>
        </h2>
      </Link>

      {/* <ScrollableDiv>
        {movies.map((movie: any) => {
          return <MovieCard key={movie.id} data={movie} />;
        })}
      </ScrollableDiv> */}

      <swiper-container ref={swiperRef} init={false}>
        {movies.map((movie: any) => {
          return (
            <swiper-slide>
              <MovieCard key={movie.id} data={movie} />
            </swiper-slide>
          );
        })}
      </swiper-container>
    </div>
  );
};

export default MoviesList;

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

// slides-per-group="4"
// slides-per-view="4"
// speed="400"
// space-between="10"
// loop="true"
// navigation={{
//   nextEl: <button>HELLO</button>,
//   prevEl: <button>HELLO</button>,
// }}
