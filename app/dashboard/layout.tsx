"use client";
import DashboardNavbar from "<@>/components/DashboardNavbar";
import React, { ReactNode, FC, useEffect, useRef } from "react";
import useSWR, { Fetcher } from "swr";
import useStore from "<@>/store/store";

const fetcher: Fetcher = (url: string) => fetch(url).then((res) => res.json());

type DashboardLayoutProps = {
  children: ReactNode;
};

const layout: FC<DashboardLayoutProps> = ({ children }) => {
  const [favorites, addFavorites] = useStore((state) => [
    state.favorites,
    state.addFavorites,
  ]);

  return (
    <>
      <DashboardNavbar />
      {children}
    </>
  );
};

export default layout;
