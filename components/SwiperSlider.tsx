import React, { FC, useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import useStore from "<@>/store/store";

register();

type SwiperSlideProps = {
  children: React.ReactNode;
};

const SwiperSlide: FC<SwiperSlideProps> = ({ children }) => {
  const updateActiveSlideIndex = useStore(
    (state) => state.updateActiveSlideIndex
  );
  const swiperRef = useRef<any>(null);
  useEffect(() => {
    if (swiperRef.current) {
      // adding styles to pagination buttons
      const shadowRoot = swiperRef.current.shadowRoot;
      const style = document.createElement("style");
      style.textContent = `
      .swiper-pagination{
        --swiper-pagination-top: -1.7rem;
        width:auto !important;
        right:8px;
        height:20px;
        display:flex;
        justify-content: flex-end;
        align-items: end;
        padding:0 5px;
        
      }
      .swiper-pagination-bullet {
        border-radius: 2px;
        width: 30px;
        height: 8px;
        opacity: 1;
        background: #212A3E;
      }
      .swiper-pagination-bullet-active {
        background: #ECF2FF;
      }
      @media (max-width: 640px) {
        .swiper-pagination-bullet {
          border-radius: 50%;
          width: 10px;
          height: 10px;
        }
       }
      `;
      shadowRoot.appendChild(style);
      // Getting current first index in the slide
      swiperRef.current.addEventListener("slidechange", (e: any) => {
        updateActiveSlideIndex(e.detail[0].realIndex);
      });
    }
  }, []);

  return (
    <swiper-container
      ref={swiperRef}
      slides-per-view={4}
      slides-per-group={4}
      loop
      space-between={15}
      speed={500}
      pagination-clickable
    >
      {children}
    </swiper-container>
  );
};

export default SwiperSlide;
