import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Input from "./Input";

const EmailForm = () => {
  return (
    <form className="flex flex-col gap-5 md:gap-10 items-center">
      <p className="text-lg md:text-2xl text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex flex-col md:flex-row gap-4 items-center h-14">
        <Input
          id="user_email"
          label="Email Address"
          type="email"
          className="w-[300px] md:w-[380px]"
        />
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
