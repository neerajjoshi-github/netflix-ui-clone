import { BsPhone, BsTabletLandscape, BsTv } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";

export const planOptions = [
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

export const planFeatures = [
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
