import React from "react";

const MediaPageSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="h-[50vh] w-full bg-[#242427] animate-pulse"></div>
      <div className="flex  gap-4">
        <div className="w-[30%] h-[50vh] xs:col-span-1 bg-[#242427] animate-pulse"></div>
        <div className="flex-1 flex flex-col gap-2 px-4">
          <p className="bg-[#242427] animate-pulse h-10 w-full rounded-md"></p>
          <p className="bg-[#242427] animate-pulse h-8 w-[40%] rounded-md mt-4"></p>
          <p className="bg-[#242427] animate-pulse h-8 w-[40%] rounded-md"></p>
          <p className="bg-[#242427] animate-pulse h-8 w-[40%] rounded-md"></p>
          <p className="bg-[#242427] animate-pulse h-8 w-[40%] rounded-md"></p>
        </div>
      </div>
    </div>
  );
};

export default MediaPageSkeleton;
