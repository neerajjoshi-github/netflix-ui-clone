import Input from "<@>/components/Input";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center bg-[url('/netflix-bg1.jpg')]">
      <div className="h-full w-full relative flex items-center justify-center bg-black/60">
        <Link href="/" className="absolute top-4 left-4">
          <div className="h-6 md:h-10 w-auto cursor-pointer">
            <img src="/logo.png" alt="Netflix logo" className="w-full h-full" />
          </div>
        </Link>
        <div className="w-full h-full bg-black/70  md:h-[90%] md:w-[420px] lg:h-[85%] px-8 py-12 md:rounded-md">
          <div className="flex flex-col gap-12">
            <h1 className="text-4xl font-bold">Sign In</h1>
            <div className="flex flex-col items-center gap-10">
              <Input
                className="w-full !border-x-0 !border-t-0 !bg-[#333333]  !border-orange-400"
                label="Email or phone number"
                id="user_email"
                type="text"
              />
              <Input
                className="w-full !border-x-0 !border-t-0 !bg-[#333333]  !border-orange-400"
                label="Password"
                id="user_password"
                type="password"
              />
            </div>
            <div className="text-zinc-300">
              <button className="w-full text-white text-xl font-bold px-4 py-3 bg-red-600 rounded-md">
                Sign In
              </button>
              <div className="flex items-center justify-between">
                <div className="mt-3 flex items-center">
                  <input
                    className="mr-1 w-4 h-4"
                    id="remember_me"
                    type="checkbox"
                  />
                  <label htmlFor="remember_me" className="text-sm">
                    Remember me
                  </label>
                </div>
                <span className="hover:underline text-sm cursor-pointer">
                  Need help?
                </span>
              </div>
              <div className="mt-2">
                New to Netflix?{" "}
                <Link
                  href="/in"
                  className="font-bold hover:underline cursor-pointer"
                >
                  Sign up now.
                </Link>
              </div>
              <div className="mt-2 text-sm">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{" "}
                <span className="text-blue-500 cursor-pointer hover:underline">
                  Learn more.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
