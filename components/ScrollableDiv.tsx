"use client";
import React, { useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type ScrollableDivProps = {
  children: React.ReactNode;
};

type slideProps = {
  scroll: "left" | "right";
};

const ScrollableDiv = ({ children }: ScrollableDivProps) => {
  const scrollableDiv = useRef<HTMLDivElement>(null);
  const [scrollEnd, setScrollEnd] = useState(false);
  const [scrollX, setScrollX] = useState(0);

  const slide = (scroll: "left" | "right") => {
    if (scrollableDiv.current !== null) {
      if (scroll === "right") {
        scrollableDiv.current.scrollLeft += scrollableDiv.current?.offsetWidth;
      } else {
        scrollableDiv.current.scrollLeft -= scrollableDiv.current?.offsetWidth;
      }

      //   check scroll buttons
      setScrollX(scrollX + scrollableDiv.current?.offsetWidth);
      if (
        Math.floor(
          scrollableDiv.current.scrollWidth - scrollableDiv.current.scrollLeft
        ) === scrollableDiv.current.offsetWidth
      ) {
        setScrollEnd(true);
      } else {
        setScrollEnd(false);
      }
    }
    console.log(scrollX, scrollEnd);
  };

  const scrollCheck = () => {
    if (scrollableDiv.current != null) {
      setScrollX(scrollableDiv.current.scrollLeft);
      if (
        Math.floor(
          scrollableDiv.current.scrollWidth - scrollableDiv.current.scrollLeft
        ) <= scrollableDiv.current.offsetWidth
      ) {
        setScrollEnd(true);
      } else {
        setScrollEnd(false);
      }
    }
  };

  return (
    <div className="relative group ">
      {scrollX !== 0 && (
        <div
          onClick={() => slide("left")}
          className="opacity-0 group-hover:opacity-100 flex transition duration-700 absolute z-10 bg-black/50 top-0 left-0 h-full items-center px-1"
        >
          <BsChevronLeft className="w-6 h-6" />
        </div>
      )}
      {!scrollEnd && (
        <div
          onClick={() => slide("right")}
          className="opacity-0 group-hover:opacity-100 flex transition duration-700 absolute z-10 bg-black/50 top-0 right-0 h-full items-center px-1"
        >
          <BsChevronRight className="w-6 h-6" />
        </div>
      )}
      <div
        onScroll={scrollCheck}
        ref={scrollableDiv}
        className="relative group scroll-smooth mt-8 flex gap-4 overflow-x-auto mb-60 hide-scrollbar"
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollableDiv;
