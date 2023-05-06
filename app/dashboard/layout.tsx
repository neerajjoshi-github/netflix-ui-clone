"use client";
import DashboardNavbar from "<@>/components/DashboardNavbar";
import React, { ReactNode, FC } from "react";
import { SessionProvider } from "next-auth/react";

type DashboardLayoutProps = {
  children: ReactNode;
};

const layout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <DashboardNavbar />
      {children}
    </>
  );
};

export default layout;
