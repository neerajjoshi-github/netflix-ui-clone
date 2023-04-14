"use client";
import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { BsPhone, BsTabletLandscape, BsTv } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";

const planOptions = [
  {
    key: 1,
    id: "mobile",
    label: "Mobile",
  },
  {
    key: 2,
    id: "basic",
    label: "Basic",
  },
  {
    key: 3,
    id: "standard",
    label: "Standard",
  },
  {
    key: 4,
    id: "premium",
    label: "Premium",
  },
];

const planFeatures = [
  {
    title: "Monthly price",
    opions: [
      {
        id: "mobile",
        name: "₹ 149",
      },
      {
        id: "basic",
        name: "₹ 199",
      },
      {
        id: "standard",
        name: "₹ 499",
      },
      {
        id: "premium",
        name: "₹ 649",
      },
    ],
  },
  {
    title: "Video quality",
    opions: [
      {
        id: "mobile",
        name: "Good",
      },
      {
        id: "basic",
        name: "Good",
      },
      {
        id: "standard",
        name: "Better",
      },
      {
        id: "premium",
        name: "Best",
      },
    ],
  },
  {
    title: "Resolution",
    opions: [
      {
        id: "mobile",
        name: "480p",
      },
      {
        id: "basic",
        name: "720p",
      },
      {
        id: "standard",
        name: "1080p",
      },
      {
        id: "premium",
        name: "4K HDR",
      },
    ],
  },
  {
    title: "Devices you can use to watch",
    opions: [
      {
        id: "mobile",
        name: (
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <BsPhone className="" />
              <span>Phone</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BsTabletLandscape />
              <span>Tablet</span>
            </div>
          </div>
        ),
      },
      {
        id: "basic",
        name: (
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <BsPhone className="" />
              <span>Phone</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BsTabletLandscape />
              <span>Tablet</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RiComputerLine />
              <span>Computer</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BsTv />
              <span>TV</span>
            </div>
          </div>
        ),
      },
      {
        id: "standard",
        name: (
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <BsPhone className="" />
              <span>Phone</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BsTabletLandscape />
              <span>Tablet</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RiComputerLine />
              <span>Computer</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BsTv />
              <span>TV</span>
            </div>
          </div>
        ),
      },
      {
        id: "premium",
        name: (
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <BsPhone className="" />
              <span>Phone</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BsTabletLandscape />
              <span>Tablet</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RiComputerLine />
              <span>Computer</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BsTv />
              <span>TV</span>
            </div>
          </div>
        ),
      },
    ],
  },
];

const PlansGrid = () => {
  const [selectedPlan, setSelectedPlan] = useState("mobile");
  return (
    <div className="my-6 flex flex-col gap-4 sm:gap-6 relative">
      <div className="sticky top-0 py-2 bg-black flex item-center justify-center sm:justify-end gap-2 sm:gap-5">
        {planOptions.map((option) => {
          return (
            <label
              htmlFor={option.id}
              key={option.key}
              className={`${
                selectedPlan === option.id ? "bg-red-600" : "bg-red-500"
              } w-[22%] sm:w-20 h-20 md:w-[100px] md:h-[110px] lg:w-[120px] lg:h-[130px] relative cursor-pointer flex items-center justify-center font-bold rounded-sm`}
            >
              <span>{option.label}</span>
              <input
                id={option.id}
                type="radio"
                name="plan"
                className="hidden"
                onChange={() => {
                  setSelectedPlan(option.id);
                }}
              />
              {selectedPlan === option.id && (
                <GoTriangleDown className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-8 h-8 text-red-600 " />
              )}
            </label>
          );
        })}
      </div>
      <table className=" flex flex-col border-spacing-x-5 border-spacing-y-10 border-collapse text-sm md:text-base lg:text-lg font-semibold  ">
        {planFeatures.map((feature, id) => {
          return (
            <tr
              key={id}
              className="py-3 flex flex-wrap gap-4 sm:gap-0 sm:flex-row w-full border-b border-red-600 gap-x-2 sm:gap-x-5"
            >
              <td className="text-center w-full sm:text-left sm:flex-1">
                {feature.title}
              </td>
              {feature.opions.map((option) => {
                return (
                  <td
                    key={option.id}
                    onClick={() => {
                      setSelectedPlan(option.id);
                    }}
                    className={`${
                      selectedPlan === option.id
                        ? "text-red-600"
                        : "text-zinc-400"
                    } w-[22%] sm:w-20 md:w-[100px] lg:w-[120px] text-center`}
                  >
                    {option.name}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
      <div className="flex flex-col gap-2 text-xs sm:text-base">
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
      <div className="flex justify-center">
        <button className="bg-red-600 hover:bg-red-700 text-xl font-bold py-3 w-[250px] md:w-[50%] rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};

export default PlansGrid;
