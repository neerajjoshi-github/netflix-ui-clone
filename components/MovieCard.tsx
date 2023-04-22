import React from "react";
import { BsFillPlayFill, BsChevronDown } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { BiLike, BiDislike } from "react-icons/bi";

const MovieCard = ({ data }: any) => {
  return (
    <div className="cursor-pointer hover:z-1 group relative">
      <div className="h-[24vh] sm:h-[28vh]">
        <img
          className="w-full h-full object-cover object-center rounded-md"
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default MovieCard;
