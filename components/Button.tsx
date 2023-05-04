import React, { FC } from "react";
import Loding from "./Loding";

type ButtonProps = {
  children: string;
  className?: string;
  isLoding?: boolean;
};

const Button: FC<ButtonProps> = ({ children, className, isLoding }) => {
  return (
    <button
      disabled={isLoding}
      className={`${className} disabled:bg-red-800 disabled:cursor-wait w-full flex items-center justify-center mt-4 bg-red-600 hover:bg-red-700 text-xl font-bold py-3 rounded-md`}
    >
      {isLoding ? <Loding /> : <>{children}</>}
    </button>
  );
};

export default Button;
