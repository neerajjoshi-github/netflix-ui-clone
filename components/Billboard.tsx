import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { billboarddata } from "<@>/data/billboardData";

const Billboard = () => {
  const data =
    billboarddata[Math.round(Math.random() * (billboarddata.length - 1))];
  return (
    <div className="relative h-[70vh] w-full">
      <div className="w-full h-1/2 z-10 bg-black-gradient-down absolute bottom-0 left-0"></div>
      <video
        className="w-full h-[70vh] object-cover brightness-50"
        autoPlay
        muted
        loop
        poster={data.poster}
        src={data.sources}
      ></video>
      <div className="z-10 absolute bottom-0 left-0 w-[80%] max-w-4xl p-4 flex flex-col gap-4">
        <h2 className="text-7xl sm:text-8xl font-bold">{data.title}</h2>
        <p className="text-xs sm:text-sm md:text-base">{data.description}</p>
        <div className="flex gap-4">
          <button
            title="Does nothing!!"
            className="flex gap-1 items-center bg-white hover:bg-zinc-100 text-black px-4 py-2 rounded-md"
          >
            <BsFillPlayFill className="w-5 h-5" />
            <span className="font-semibold">Play</span>
          </button>
          <button
            title="Does nothing!!"
            className="flex gap-1 items-center px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-lg rounded-md"
          >
            <IoMdAdd className="w-5 h-5" />
            <span className="font-semibold">My List</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
