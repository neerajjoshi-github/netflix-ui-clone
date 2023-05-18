import React, { FC } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";

type ImageBillboardProps = {
  data: ShowsResult | MoviesResult;
};

const ImageBillboard: FC<ImageBillboardProps> = ({ data }) => {
  return (
    <div>
      <div className="relative h-[70vh] w-full">
        <div className="w-full h-full bg-black-gradient absolute top-0 left-0"></div>
        <div className="w-full h-1/2 z-10 bg-black-gradient-down absolute bottom-0 left-0"></div>

        <img
          className="w-full h-[70vh] object-cover object-center"
          src={`https://image.tmdb.org/t/p/original/${
            data.poster_path || data.backdrop_path
          }`}
          alt=""
        />
        <div className="z-10 absolute bottom-0 left-0 w-[80%] max-w-4xl p-4 flex flex-col gap-4">
          <h2 className="text-7xl sm:text-8xl font-bold">
            {data.type === "movies" ? data.original_title : data.name}
          </h2>
          <p className="text-xs sm:text-sm md:text-base">{data.overview}</p>
          <div className="flex gap-4">
            <button className="flex gap-1 items-center bg-white hover:bg-zinc-100 text-black px-4 py-2 rounded-md">
              <BsFillPlayFill className="w-5 h-5" />
              <span className="font-semibold">Play</span>
            </button>
            <button className="flex gap-1 items-center px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-lg rounded-md">
              <IoMdAdd className="w-5 h-5" />
              <span className="font-semibold">My List</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBillboard;
