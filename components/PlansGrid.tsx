"use client";
import React from "react";
import { GoTriangleDown } from "react-icons/go";
import { planFeatures, planOptions } from "<@>/data/plansGridData";
import useStore from "<@>/store/store";

type PlanOption = "mobile" | "basic" | "standard" | "premium";

const PlansGrid = () => {
  const [selectedPlan, updateSelectedPlan] = useStore((state) => [
    state.selectedPlan,
    state.updateSelectedPlan,
  ]);

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
                  updateSelectedPlan(option.id);
                }}
              />
              {selectedPlan === option.id && (
                <GoTriangleDown className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-8 h-8 text-red-600 " />
              )}
            </label>
          );
        })}
      </div>
      <table className="">
        <tbody className=" flex flex-col border-spacing-x-5 border-spacing-y-10 border-collapse text-sm md:text-base lg:text-lg font-semibold  ">
          {planFeatures.map((feature, id) => {
            return (
              <tr
                key={id}
                className="py-3 flex flex-wrap gap-4 sm:gap-0 sm:flex-row w-full border-b border-red-600 gap-x-2 sm:gap-x-5"
              >
                <td className="text-center w-full sm:text-left sm:flex-1">
                  {feature.title}
                </td>
                {feature.options.map((option) => {
                  return (
                    <td
                      key={option.id}
                      onClick={() => {
                        updateSelectedPlan(option.id);
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
        </tbody>
      </table>
    </div>
  );
};

export default PlansGrid;
