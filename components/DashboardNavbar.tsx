"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsSearch, BsBell } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import AccountMenu from "./AccountMenu";
import MobileMenu from "./MobileMenu";
import { navLinks } from "<@>/data/navLinks";
import { usePathname } from "next/navigation";
import Search from "./Search";

const TOP_OFFSET = 66;

const DashboardNavbar = () => {
  const pathname = usePathname();
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const toggleAccountMenu = () => {
    setIsMobileMenuOpen(false);
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };
  const toggleMobileMenu = () => {
    setIsAccountMenuOpen(false);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${
        showBackground ? "bg-zinc-900/90 backdrop-blur-md " : "bg-transparent"
      } fixed top-0 left-0 transition duration-300 w-full z-40 max-sm:py-2 max-sm:px-2 py-4 px-10 flex items-center`}
    >
      {isSearchOpen && (
        <Search closeSearchModal={() => setIsSearchOpen(false)} />
      )}
      <Link
        className="max-lg:absolute max-sm:top-6 max-lg:top-8 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:-translate-y-1/2"
        href="/"
      >
        <div className="h-6 md:h-10 w-auto">
          <img src="/logo.png" alt="Netflix logo" className="w-full h-full" />
        </div>
      </Link>

      <ul className="hidden lg:flex gap-4 ml-8">
        {navLinks.map((link) => {
          return (
            <li
              key={link.title}
              className={`${
                pathname === link.herf
                  ? "font-bold text-white"
                  : "text-zinc-300 hover:text-white"
              } `}
            >
              <Link href={link.herf}>{link.title}</Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={toggleMobileMenu}
        className="w-6 h-6 lg:hidden cursor-pointer"
      >
        <GiHamburgerMenu className="w-full h-full" />
      </div>
      {isMobileMenuOpen && (
        <MobileMenu
          closeMobileMenu={() => {
            setIsMobileMenuOpen(false);
          }}
        />
      )}

      <div className="flex gap-4 md:gap-6 ml-auto items-center">
        <div
          onClick={toggleSearch}
          className="h-4 w-4 md:w-5 md:h-5 cursor-pointer"
        >
          <BsSearch className="w-full h-full" />
        </div>
        <div className="h-4 w-4 max-md:hidden md:w-5 md:h-5 cursor-pointer">
          <BsBell className="w-full h-full" />
        </div>
        <div
          onClick={toggleAccountMenu}
          className="flex items-center gap-1 cursor-pointer"
        >
          <div className="w-6 h-6 md:w-8 md:h-8">
            <img
              className="w-full h-full object-cover rounded-md"
              src="/images/profiles/profile2.png"
              alt="profile_icon"
            />
          </div>

          <IoIosArrowDown
            className={`${
              isAccountMenuOpen ? "rotate-180" : "rotate-0"
            } transition duration-150`}
          />
        </div>
        {isAccountMenuOpen && (
          <AccountMenu
            closeAccountMenu={() => {
              setIsAccountMenuOpen(false);
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default DashboardNavbar;
