import Footer from "<@>/components/Footer";
import PlansGrid from "<@>/components/PlansGrid";
import React from "react";
import { BsCheckLg } from "react-icons/bs";

const page = () => {
  return (
    <div className="mt-8 md:w-[80%] lg:w-[75%] px-4">
      <p className="uppercase text-sm">
        Step <span className="font-bold">1</span> of{" "}
        <span className="font-bold">3</span>
      </p>
      <div className="flex flex-col mt-8 gap-2 sm:gap-6">
        <h2 className="text-3xl font-bold mb-4">
          Choose the plan that’s right for you
        </h2>
        <p className="flex gap-4 text-lg sm:text-xl">
          <BsCheckLg size={35} className="text-red-600" /> Watch all you want.
          Ad-free.
        </p>
        <p className="flex gap-4 text-lg sm:text-xl">
          <BsCheckLg size={35} className="text-red-600" /> Recommendations just
          for you.
        </p>
        <p className="flex gap-4 text-lg sm:text-xl">
          <BsCheckLg size={35} className="text-red-600" /> Change or cancel your
          plan anytime.
        </p>
      </div>
      <PlansGrid />
    </div>
  );
};

export default page;
