"use client";
import dynamic from "next/dynamic";
import React, { FC, useRef, useEffect } from "react";
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
  const [activeSlideIndex, updateActiveSlideIndex] = useStore((state) => [
    state.activeSlideIndex,
    state.updateActiveSlideIndex,
  ]);
  // console.log("activeIndex from mediaList", activeSlideIndex);
  const swiperSlideRef = useRef(null);
  useEffect(() => {
    //   // listen for Swiper events using addEventListener
    //   swiperSlideRef.current.addEventListener("", (e) => {
    //     const [swiper, progress] = e.detail;
    //     console.log("progress", e);
    //   });
    // swiperSlideRef.current.addEventListener("slidechange", (e) => {
    //   console.log("slide changed", e.detail[0].isEnd);
    // });
  }, []);

  return (
    // mt-8 sm:mt-16
    <div className="px-2 sm:pl-10 sm:pr-8 border-t border-b border-white ">
      <Link href={`/dashboard/browse/${urlParams}`}>
        {/* mb-8 */}
        <h2 className="flex gap-1 items-end ">
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
          // console.log(index, activeSlideIndex);
          // console.log("activeIndex", activeSlideIndex, "index", index);
          return (
            <swiper-slide ref={swiperSlideRef} key={media.id}>
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
