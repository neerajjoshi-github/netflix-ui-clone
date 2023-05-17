import React, { FC } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { title: "Home", herf: "/dashboard" },
  { title: "TV Shows", herf: "/dashboard/shows" },
  { title: "Movies", herf: "/dashboard/movies" },
  { title: "New & Popular", herf: "/dashboard/new_and_popular" },
  { title: "My List", herf: "/dashboard/my_list" },
  { title: "Browse by Languages", herf: "/dashboard/browse_by_languages" },
];

type MobileMenuProps = {
  closeMobileMenu: () => void;
};

const MobileMenu: FC<MobileMenuProps> = ({ closeMobileMenu }) => {
  return (
    <div className="fixed lg:hidden top-16 left-2 bg-black rounded-lg border-2 border-gray-400 w-[250px] py-8 px-4">
      <AiOutlineClose
        onClick={closeMobileMenu}
        className="absolute top-2 right-2 w-4 h-4 cursor-pointer"
      />
      <ul className="flex flex-col gap-2 items-center">
        {navLinks.map((link, index) => {
          return (
            <li key={index} className="w-full hover:bg-slate-700 text-center">
              <Link className="py-2 cursor-pointer block" href={link.herf}>
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
