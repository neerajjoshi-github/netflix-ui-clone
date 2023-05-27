import React, { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "<@>/data/navLinks";
import { usePathname, useRouter } from "next/navigation";

type MobileMenuProps = {
  closeMobileMenu: () => void;
};

const MobileMenu: FC<MobileMenuProps> = ({ closeMobileMenu }) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="fixed lg:hidden top-16 left-2 bg-black rounded-lg border-2 border-gray-400 w-[250px] py-8 px-4">
      <AiOutlineClose
        onClick={closeMobileMenu}
        className="absolute top-2 right-2 w-4 h-4 cursor-pointer"
      />
      <ul className="flex flex-col gap-2 items-center">
        {navLinks.map((link, index) => {
          return (
            <li
              onClick={() => {
                router.push(link.herf);
                closeMobileMenu();
              }}
              key={index}
              className={`${
                link.herf === pathname
                  ? "font-bold text-white"
                  : "text-zinc-300"
              } w-full hover:bg-slate-700 text-center py-2 cursor-pointer`}
            >
              {link.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
