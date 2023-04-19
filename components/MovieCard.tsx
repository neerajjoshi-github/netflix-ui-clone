import React from "react";
import { BsFillPlayFill, BsChevronDown } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { BiLike, BiDislike } from "react-icons/bi";

const MovieCard = ({ data }: any) => {
  return (
    <div className="group relative">
      <div className="group-hover:hidden w-[260px] h-[24vh]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt=""
        />
      </div>
      {/* <div className="hidden group-hover:flex flex-col gap-4 bg-slate-900 rounded-md transition duration-300 hover:translate-y-8  hover:scale-150">
        <div className="w-[260px] h-[24vh] rounded-md ">
          <img
            className="w-full h-full object-cover rounded-t-md"
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt=""
          />
        </div>
        <div className="flex gap-2 px-2">
          <div className="w-6 h-6 p-[2px] flex items-center justify-center rounded-full border-2 border-white">
            <BsFillPlayFill className="w-full h-full" />
          </div>
          <div className="w-6 h-6 p-[2px] flex items-center justify-center rounded-full border-2 border-white">
            <IoMdAdd className="w-full h-full" />
          </div>
          <div className="w-6 h-6 p-[2px] flex items-center justify-center rounded-full border-2 border-white">
            <BiLike className="w-full h-full" />
          </div>
          <div className="w-6 h-6 p-[2px] flex items-center justify-center rounded-full border-2 border-white">
            <BiDislike className="w-full h-full" />
          </div>
          <div className="ml-auto w-6 h-6 p-[2px] flex items-center justify-center rounded-full border-2 border-white">
            <BsChevronDown className="w-full h-full" />
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default MovieCard;
