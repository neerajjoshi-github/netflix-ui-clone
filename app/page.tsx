"use client";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const Home = () => {
  const data = useSession();
  console.log("Data from use session", data.status);
  if (data.status === "authenticated") {
    redirect("/dashboard");
  } else if (data.status === "unauthenticated") {
    redirect("/in");
  }
};

export default Home;
