"use client";
import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

type InputProps = {
  label: string;
  type?: string;
  id: string;
  className?: string;
  register: any;
  errorMessage?: string;
  touchedFlieds?: boolean;
};

const Input = ({
  label,
  type,
  id,
  className,
  register,
  errorMessage,
  touchedFlieds,
}: InputProps) => {
  return (
    <div
      className={`${className}  focus:ring-0 relative rounded-lg p-px border-2 border-transparent  focus-within:border-white`}
    >
      <input
        id={id}
        type={type}
        className={`${errorMessage ? "border-red-600" : ""} 
        ${touchedFlieds && !errorMessage ? "border-green-600" : ""} 
         border-gray-300 border placeholder:text-transparent peer block w-full h-full px-4 pt-7 pb-2  bg-transparent rounded-md outline-none`}
        placeholder=" "
        {...register}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-4 z-10 origin-[0] text-lg text-gray-400 transform -translate-y-3 scale-75 duration-150 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
      {errorMessage && (
        <span className="absolute truncate -bottom-6 flex gap-2 items-center left-0 text-xs text-red-600 font-semibold">
          <RiCloseCircleLine className="w-4 h-4" /> {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Input;
