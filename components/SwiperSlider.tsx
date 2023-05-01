import React, { FC } from "react";
import { register } from "swiper/element/bundle";
register();

type SwiperSlideProps = {
  children: React.ReactNode;
};

const SwiperSlide: FC<SwiperSlideProps> = ({ children }) => {
  return (
    <swiper-container
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
