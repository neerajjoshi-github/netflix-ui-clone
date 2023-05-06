"use client";
import React, { FC } from "react";
import { SessionProvider } from "next-auth/react";

type ProviderWrapperProps = {
  children: React.ReactNode;
};

const ProviderWrapper: FC<ProviderWrapperProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default ProviderWrapper;
