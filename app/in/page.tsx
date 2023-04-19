import EmailForm from "<@>/components/EmailForm";
import React from "react";
import { BsGlobe } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import FaqSection from "<@>/components/FaqSection";
import Footer from "<@>/components/Footer";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="h-[80vh] md:h-screen relative bg-[url('/netflix-bg1.jpg')] bg-cover bg-center">
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
            <button className="px-2 py-1 text-xs md:text-base md:px-4 md:py-2 rounded-md bg-red-600 hover:bg-red-700 text-white">
              <Link href="/in/login">Sign In</Link>
            </button>
          </div>
        </nav>
        <div className="h-full flex items-center justify-center bg-black/50">
          <div className="flex flex-col items-center  text-center gap-y-5">
            <h1 className="font-black text-4xl md:text-5xl ">
              Unlimited movies, TV shows and more.
            </h1>
            <p className="text-lg md:text-2xl ">
              Watch anywhere. Cancel anytime.
            </p>
            <EmailForm />
          </div>
        </div>
      </div>
      <hr className=" w-full h-2 border-none bg-[#232323]" />
      <div className=" h-auto flex flex-col gap-4 lg:flex-row items-center text-center lg:text-start px-5 py-4 md:px-32 md:py-10">
        <div className="flex flex-col gap-4 md:gap-6 justify-center">
          <h2 className="font-bold text-3xl lg:text-5xl">Enjoy on your TV.</h2>
          <p className="text-lg lg:text-2xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="relative">
          <div className="z-[1]">
            <img
              src="/tv.png"
              alt="TV image"
              className="w-full h-full object-cover overflow-clip"
            />
          </div>
          <div className="-z-[1] w-[75%] h-[65%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
            <video
              src="/videos/video-tv.m4v"
              autoPlay
              loop
              playsInline
              muted
              className="object-contain overflow-clip"
            ></video>
          </div>
        </div>
      </div>
      <hr className=" w-full h-2 border-none bg-[#232323]" />
      <div className="h-auto flex  flex-col-reverse gap-4 lg:flex-row items-center text-center lg:text-start px-5 py-4 md:px-32 md:py-10">
        <div className="relative">
          <img
            src="/mobile.jpg"
            className="lg:min-w-[480px]"
            alt="Mobile app image"
          />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2  w-[80%] lg:w-[60%] h-20 bg-black border border-gray-400 rounded-xl flex items-center justify-between">
            <div className="h-full p-2">
              <img
                src="/boxshot.png"
                className="h-full w-auto"
                alt="Stranger thing poster in boxshot"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-base sm:text-lg ">
                Stranger Things
              </span>
              <span className="text-sm text-blue-600">Downloading...</span>
            </div>
            <div className="h-full p-2">
              <img
                src="/gifs/download-icon.gif"
                className="h-full w-auto"
                alt="Downloading gif"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-6 justify-center">
          <h2 className="font-bold text-3xl lg:text-5xl">
            Download your shows to watch offline.
          </h2>
          <p className="text-lg lg:text-2xl">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>
      <hr className="w-full h-2 border-none bg-[#232323]" />
      <div className="h-auto flex flex-col gap-4 lg:flex-row items-center text-center lg:text-start px-5 py-4 md:px-32 md:py-10">
        <div className="flex flex-col gap-4 md:gap-6 justify-center">
          <h2 className="font-bold text-3xl lg:text-5xl">Watch everywhere.</h2>
          <p className="text-lg lg:text-2xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div>
          <div className="relative">
            <img src="/device-pile-in.png" className="z-1" alt="" />
            <div className="-z-[1] absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%]">
              <video
                autoPlay
                muted
                loop
                playsInline
                src="/videos/video-devices-in.m4v"
                className="w-full h-full object-contain"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-2 border-none bg-[#232323]" />
      <div className="h-auto flex  flex-col-reverse gap-4 lg:flex-row items-center text-center lg:text-start px-5 py-4 md:py-10 md:px-24">
        <div className="w-full">
          <img
            src="/children-profile.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-6 justify-center">
          <h2 className="font-bold text-3xl lg:text-5xl">
            Create profiles for children.
          </h2>
          <p className="text-lg lg:text-2xl">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
      <hr className="w-full h-2 border-none bg-[#232323]" />
      <FaqSection />
      <hr className="w-full h-2 border-none bg-[#232323]" />
      <Footer />
    </div>
  );
};

export default page;
