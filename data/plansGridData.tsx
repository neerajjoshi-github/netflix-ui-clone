import { BsPhone, BsTabletLandscape, BsTv } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";

export type PlanOptionType = {
  key: number;
  id: "mobile" | "basic" | "standard" | "premium";
  label: string;
};

export const planOptions: PlanOptionType[] = [
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

type OptionType = {
  id: "mobile" | "basic" | "standard" | "premium";
  name: string | JSX.Element;
};

export type PlanFeatureType = {
  title: string;
  options: OptionType[];
};

export const planFeatures: PlanFeatureType[] = [
  {
    title: "Monthly price",
    options: [
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
    options: [
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
    options: [
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
    options: [
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
