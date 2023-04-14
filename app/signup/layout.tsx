import Link from "next/link";
import React, { ReactNode, FC } from "react";

type SignUpLayoutProps = {
  children: ReactNode;
};

const SignUpLayout: FC<SignUpLayoutProps> = ({ children }) => {
  return (
    <div>
      <nav className="flex px-10 md:px-24 py-4 md:py-6 items-center justify-between border-b-2 border-gray-800">
        <Link href="/">
          <div className="h-6 md:h-10 w-auto">
            <img src="/logo.png" alt="Netflix logo" className="w-full h-full" />
          </div>
        </Link>
        <div>
          <Link href="/in/login" className="text-xl font-bold hover:underline">
            Sign In
          </Link>
        </div>
      </nav>
      <div className="flex h-full items-center justify-center">{children}</div>
    </div>
  );
};

export default SignUpLayout;
