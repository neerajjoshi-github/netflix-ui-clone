"use client";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen relative flex items-center justify-center bg-[url(/images/backgrounds/bg-lost-in-space.png)] bg-cover bg-center">
      <nav className="fixed flex items-center pl-8 top-0 left-0 w-full h-16 bg-black">
        <div className="h-6 w-24">
          <img src="/logo.png" alt="Netflix logo" className="w-full h-full" />
        </div>
      </nav>
      <div className="max-w-3xl relative ">
        <div className="bg-black/40 absolute top-0 left-0 w-full h-full blur-3xl"></div>
        <div className="flex flex-col relative items-center text-center gap-8 p-4 z-[1]">
          <h2 className="max-sm:text-5xl text-7xl font-bold">Lost your way?</h2>
          <p className="text-2xl font-light">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <a href="/">
            <button className="py-2 px-5 bg-white hover:bg-white/90 text-black font-semibold text-xl rounded-md">
              Netflix Home
            </button>
          </a>

          <span className="text-3xl relative border-l-[3px] border-red-600 p-2">
            Error Code <span className="font-bold">NSES-404</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
