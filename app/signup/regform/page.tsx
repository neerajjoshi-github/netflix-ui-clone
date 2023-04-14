import React from "react";
import Input from "<@>/components/Input";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-full md:h-[90%] md:w-[420px] lg:h-[85%] px-8 py-12">
      <p className="uppercase text-sm">
        Step <span className="font-bold">1</span> of{" "}
        <span className="font-bold">3</span>
      </p>

      <div className="mt-4 flex flex-col gap-6">
        <h2 className="text-3xl font-semibold">
          Create a password to start your membership
        </h2>
        <p className="text-xl">
          Just a few more steps and you're done! We hate paperwork, too.
        </p>
        <Input
          className="w-full"
          label="Email or phone number"
          id="user_email"
          type="text"
        />
        <Input
          className="w-full"
          label="Password"
          id="user_password"
          type="password"
        />
        <Link href="/signup">
          <button className="bg-red-600 hover:bg-red-700 text-xl font-bold py-3 w-full rounded-md">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
