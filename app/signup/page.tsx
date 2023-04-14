import React from "react";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import { CgCheckO } from "react-icons/cg";

const page = () => {
  return (
    <div className="flex flex-col items-center gap-4 w-full h-full md:h-[90%] md:w-[420px] lg:h-[85%] px-8 py-12">
      <CgCheckO size={40} className="text-red-600" />
      <p className="uppercase text-sm">
        Step <span className="font-bold">2</span> of{" "}
        <span className="font-bold">3</span>
      </p>
      <h2 className="text-3xl font-bold">Choose your plan.</h2>
      <div className="flex flex-col gap-6">
        <p className="flex gap-4 text-xl">
          <BsCheckLg size={35} className="text-red-600" /> No commitments,
          cancel anytime.
        </p>
        <p className="flex gap-4 text-xl">
          <BsCheckLg size={35} className="text-red-600" /> Everything on Netflix
          for one low price.
        </p>
        <p className="flex gap-4 text-xl">
          <BsCheckLg size={35} className="text-red-600" /> No ads and no extra
          fees. Ever.
        </p>
      </div>
      <Link href="/signup/planform" className="w-full">
        <button className="bg-red-600 hover:bg-red-700 text-xl font-bold py-3 w-full rounded-md">
          Next
        </button>
      </Link>
    </div>
  );
};

export default page;
