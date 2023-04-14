import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full md:h-[90%] md:w-[420px] lg:h-[85%] px-8 py-12">
      <div>
        <img
          src="/Devices.png"
          alt="Image of devices"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 items-center text-center">
        <p className="uppercase text-sm">
          Step <span className="font-bold">1</span> of{" "}
          <span className="font-bold">3</span>
        </p>
        <h2 className="text-4xl font-bold text-center">
          Finish setting up your account
        </h2>
        <div>
          <p className="text-lg">Netflix is personalised for you.</p>
          <p className="text-lg">
            Create a password to watch on any device at any time
          </p>
        </div>
        <Link href="/signup/regform">
          <button className="bg-red-600 hover:bg-red-700 text-xl font-bold py-3 w-full rounded-md">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
