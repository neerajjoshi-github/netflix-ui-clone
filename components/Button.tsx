import React, { FC } from "react";

type ButtonProps = {
  children: string;
  className?: string;
};

const Button: FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`${className} mt-4 bg-red-600 hover:bg-red-700 text-xl font-bold py-3 w-full rounded-md`}
    >
      {children}
    </button>
  );
};

export default Button;
