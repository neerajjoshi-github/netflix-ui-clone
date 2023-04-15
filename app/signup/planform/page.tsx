import Button from "<@>/components/Button";
import Footer from "<@>/components/Footer";
import PlansGrid from "<@>/components/PlansGrid";
import Link from "next/link";
import React from "react";
import { BsCheckLg } from "react-icons/bs";

const page = () => {
  return (
    <div className="mt-8 md:w-[80%] lg:w-[75%] px-4  ">
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
      <div className="flex flex-col gap-4 text-xs sm:text-base">
        <p>
          HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject
          to your internet service and device capabilities. Not all content is
          available in all resolutions. See our{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Terms of Use
          </span>{" "}
          for more details.
        </p>
        <p>
          Only people who live with you may use your account. Watch on 4
          different devices at the same time with Premium, 2 with Standard, and
          1 with Basic and Mobile.
        </p>
      </div>
      <div className="flex justify-center items-center mb-20">
        <Link href="/signup/paymentPicker" className="w-[250px] md:w-[50%] ">
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
