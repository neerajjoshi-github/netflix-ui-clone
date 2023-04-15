"use client";
import React from "react";

type InputProps = {
  label: string;
  type?: string;
  id: string;
  className?: string;
};

const Input = ({ label, type, id, className }: InputProps) => {
  return (
    <div
      className={`${className} relative rounded-md border-2 border-gray-400 focus-within:border-white`}
    >
      <input
        id={id}
        type={type}
        className={`peer block w-full h-full px-4 pt-7 pb-2  bg-transparent rounded-md outline-none`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-4 z-10 origin-[0] text-lg text-gray-400 transform -translate-y-3 scale-75 duration-150 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
