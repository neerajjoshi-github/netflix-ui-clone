import Billboard from "<@>/components/Billboard";
import DashboardNavbar from "<@>/components/DashboardNavbar";
import MoviesList from "<@>/components/MoviesList";
import React from "react";

const page = () => {
  return (
    <div className="w-screen">
      <DashboardNavbar />
      <Billboard />
      <MoviesList />
    </div>
  );
};

export default page;
