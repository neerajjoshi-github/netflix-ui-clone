import React, { FC, useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import useStore from "<@>/store/store";

register();

type SwiperSlideProps = {
  children: React.ReactNode;
};

const SwiperSlide: FC<SwiperSlideProps> = ({ children }) => {
  const [activeSlideIndex, updateActiveSlideIndex] = useStore((state) => [
    state.activeSlideIndex,
    state.updateActiveSlideIndex,
  ]);
  const swiperRef = useRef(null);
  useEffect(() => {
    // listen for Swiper events using addEventListener
    // swiperRef.current.addEventListener("progress", (e) => {
    //   const [swiper, progress] = e.detail;
    //   console.log("progress active Index", e.detail[0].activeIndex);
    // });
    swiperRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed", e.detail[0].realIndex);
      updateActiveSlideIndex(e.detail[0].realIndex);
    });
  }, []);
  return (
    <swiper-container
      ref={swiperRef}
      slides-per-view={4}
      slides-per-group={4}
      loop
      space-between={15}
      speed={500}
    >
      {children}
    </swiper-container>
  );
};

export default SwiperSlide;
