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
  const swiperRef = useRef<any>(null);
  useEffect(() => {
    if (swiperRef.current)
      swiperRef.current.addEventListener("slidechange", (e: any) => {
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
