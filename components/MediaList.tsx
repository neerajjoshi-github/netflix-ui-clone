"use client";
import dynamic from "next/dynamic";
import React, { FC, useRef, useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import { HiChevronDoubleRight } from "react-icons/hi";
import Link from "next/link";
import useStore from "<@>/store/store";

const DynamicSwiperComponent = dynamic(() => import("./SwiperSlider"), {
  ssr: false,
});

type MoviesListProps = {
  data: ShowsResult[] | MoviesResult[];
  title: string;
  urlParams?: string;
};

const MediaList: FC<MoviesListProps> = ({ data, title, urlParams }) => {
  const activeSlideIndex = useStore((state) => state.activeSlideIndex);
  return (
    <div className="mx-2 overflow-hidden sm:ml-10 sm:mr-4">
      <Link href={`/dashboard/browse/${urlParams}`}>
        <h2 className="inline-flex gap-1 items-end">
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

      <DynamicSwiperComponent>
        {data.map((media: MoviesResult | ShowsResult, index) => {
          return (
            <swiper-slide key={media.id}>
              <MediaCard
                media={media}
                isEnd={activeSlideIndex + 3 === index}
                isStart={activeSlideIndex === index}
              />
            </swiper-slide>
          );
        })}
      </DynamicSwiperComponent>
    </div>
  );
};

export default MediaList;
