import React from "react";

const profilesData = [
  {
    profileImageUrl: "/images/profiles/profile1.png",
    profileName: "Luca",
  },
  {
    profileImageUrl: "/images/profiles/profile2.png",
    profileName: "Amara",
  },
  {
    profileImageUrl: "/images/profiles/profile3.png",
    profileName: "Jayden",
  },
  {
    profileImageUrl: "/images/profiles/profile4.png",
    profileName: "Eliana",
  },
];

const page = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-5xl font-semibold">Who's wacthing?</h1>
          <div className="flex gap-4 flex-wrap items-center justify-center">
            {profilesData.map((data) => {
              return (
                <div className="flex flex-col gap-2 items-center cursor-pointer group">
                  <img
                    className="w-32 h-32 object-cover object-center border border-transparent group-hover:border-white"
                    src={data.profileImageUrl}
                    alt={`Profile Image ${data.profileName}`}
                  />
                  <span className="text-lg text-zinc-300 font-semibold group-hover:text-white">
                    {data.profileName}
                  </span>
                </div>
              );
            })}
          </div>
          <button className="text-lg w-[85%] px-4 py-2 border border-gray-300 ">
            Manage Profiles
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
