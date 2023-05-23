"use client";
import React from "react";
import { BsGlobe } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  return (
    <nav className="absolute z-0 top-0 left-0 w-full flex items-center justify-between px-5 md:px-24 lg:px-[200px] py-2 md:py-5">
      <div className="h-6 md:h-10 w-auto">
        <img src="/logo.png" alt="Netflix logo" className="w-full h-full" />
      </div>
      <div className="flex gap-2 md:gap-6 items-center">
        <div className="relative">
          <select
            name="language"
            id="language"
            className="text-white rounded-md font-semibold text-xs md:text-base appearance-none border border-gray-400 bg-black/60 px-8 py-1"
          >
            <option value="english">English</option>
            <option value="hindi">हिन्दी</option>
          </select>
          <BsGlobe className="absolute w-3 h-3 md:w-4 md:h-4 top-2 left-2" />
          <IoMdArrowDropdown
            size={18}
            className="absolute top-1 md:top-2 right-3"
          />
        </div>
        {session.status === "unauthenticated" ? (
          <button className="px-2 py-1 text-xs md:text-base md:px-4 md:py-2 rounded-md bg-red-600 hover:bg-red-700 text-white">
            <Link href="/in/login">Log In</Link>
          </button>
        ) : (
          <button
            onClick={() => signOut()}
            className="px-2 py-1 text-xs md:text-base md:px-4 md:py-2 rounded-md bg-red-600 hover:bg-red-700 text-white"
          >
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
