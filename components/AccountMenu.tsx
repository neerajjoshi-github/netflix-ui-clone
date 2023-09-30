import React, { FC } from "react";
import { AiOutlineSetting, AiOutlineClose } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { useSession, signOut } from "next-auth/react";

type AccountMenuProps = {
  closeAccountMenu: () => void;
};

const AccountMenu: FC<AccountMenuProps> = ({ closeAccountMenu }) => {
  const { data } = useSession();
  console.log(data);
  return (
    <div className="fixed top-16 right-2 flex flex-col gap-4 w-[250px] h-[300px] bg-black z-50 rounded-lg border-2 border-gray-400 px-4 py-8">
      <AiOutlineClose
        onClick={closeAccountMenu}
        className="absolute top-2 right-2 w-4 h-4 cursor-pointer"
      />
      <div className="flex items-center gap-4">
        <div className="w-8 h-8">
          <img
            className="w-full h-full object-cover rounded-md"
            src="/images/profiles/profile2.png"
            alt="profile_icon"
          />
        </div>
        <span className="underline underline-offset-2">
          {data?.user.userName}
        </span>
      </div>
      <div className="flex items-center cursor-not-allowed group py-2 px-2 hover:bg-slate-700">
        <span>Account Settings</span>
        <AiOutlineSetting className="ml-auto group-hover:rotate-90 transition duration-500" />
      </div>
      <div className="flex items-center cursor-not-allowed group py-2 px-2 hover:bg-slate-700">
        <span>Profile Settings</span>
        <AiOutlineSetting className="ml-auto group-hover:rotate-90 transition duration-500 " />
      </div>
      <div
        onClick={() => signOut()}
        className="absolute bottom-2 right-2 flex gap-2 items-center cursor-pointer"
      >
        <span>Logout</span>
        <BiLogOut className="w-5 h-5" />
      </div>
    </div>
  );
};

export default AccountMenu;
