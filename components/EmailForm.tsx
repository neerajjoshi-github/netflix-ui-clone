import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const EmailForm = () => {
  return (
    <form className="flex flex-col gap-5 md:gap-10 items-center">
      <p className="text-lg md:text-2xl text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex flex-col md:flex-row gap-4 items-center h-14">
        <div className="relative">
          <input
            id="email"
            type="email"
            className="peer block w-[300px] md:w-[380px] h-full px-4 pt-7 pb-2 bg-black/70 rounded-md border border-gray-400"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-4 z-10 origin-[0] text-lg text-gray-400 transform -translate-y-3 scale-75 duration-150 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
          >
            Email Address
          </label>
        </div>
        <button className="h-full flex items-center py-2 px-2 rounded-md text-2xl font-semibold bg-red-600 hover:bg-red-700 transition duration-300">
          Get Started
          <IoIosArrowForward size={30} className="text-white" />
        </button>
      </div>
    </form>
  );
};

export default EmailForm;

//
