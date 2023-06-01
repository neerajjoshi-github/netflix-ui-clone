"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const page = () => {
  const router = useRouter();
  const { data } = useSession();
  return (
    <div className="relative flex h-screen items-center justify-center">
      <Link className="absolute top-4 left-4" href="/">
        <div className="h-6 md:h-10 w-auto">
          <img src="/logo.png" alt="Netflix logo" className="w-full h-full" />
        </div>
      </Link>

      <div>
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-5xl font-semibold">Who's wacthing?</h1>
          <div className="flex gap-4 flex-wrap items-center justify-center">
            {data?.user.profiles.map((data, index) => {
              return (
                <div
                  onClick={() => router.push("/dashboard")}
                  key={index}
                  className="flex flex-col gap-2 items-center cursor-pointer group"
                >
                  <img
                    className="w-32 h-32 object-cover object-center border border-transparent group-hover:border-white"
                    src="/images/profiles/profile4.png"
                    alt={`Profile Image ${data.profileName}`}
                  />
                  <span className="text-lg text-zinc-300 font-semibold group-hover:text-white">
                    {data.profileName}
                  </span>
                </div>
              );
            })}
          </div>
          <button
            disabled
            className="disabled:cursor-not-allowed disabled:text-zinc-400 text-lg w-[85%] px-4 py-2 border border-gray-300 hover:bg-slate-900 "
          >
            Manage Profiles
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
