"use client";
import DashboardNavbar from "<@>/components/DashboardNavbar";
import React, { ReactNode, FC, useEffect, useRef } from "react";

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
// body 100vh navbar background search model open clode
