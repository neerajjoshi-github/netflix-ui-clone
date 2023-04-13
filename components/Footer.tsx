import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-10 px-8 md:px-24 text-zinc-400">
      <span className="block mb-4">
        Questions? call{" "}
        <a className="underline" href="tel:000-800-919-1694">
          000-800-919-1694
        </a>
      </span>
      <div className="flex flex-col sm:flex-row  sm:items-center sm:justify-between gap-2">
        <div className="flex flex-col gap-2">
          <Link className="underline underline-offset-1" href="">
            FAQ
          </Link>
          <Link className="underline underline-offset-1" href="">
            Media Center
          </Link>
          <Link className="underline underline-offset-1" href="">
            Ways to Watch
          </Link>
          <Link className="underline underline-offset-1" href="">
            Cookie Preference
          </Link>
          <Link className="underline underline-offset-1" href="">
            Speed Test
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link className="underline underline-offset-1" href="">
            Help Center
          </Link>
          <Link className="underline underline-offset-1" href="">
            Investor Relation
          </Link>
          <Link className="underline underline-offset-1" href="">
            Terms of Use
          </Link>
          <Link className="underline underline-offset-1" href="">
            Corporate Information
          </Link>
          <Link className="underline underline-offset-1" href="">
            Legal Notices
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link className="underline underline-offset-1" href="">
            Account
          </Link>
          <Link className="underline underline-offset-1" href="">
            Jobs
          </Link>
          <Link className="underline underline-offset-1" href="">
            Privacy
          </Link>
          <Link className="underline underline-offset-1" href="">
            Contact Us
          </Link>
          <Link className="underline underline-offset-1" href="">
            Only on NEtflix
          </Link>
        </div>
      </div>
      <div className="block mt-8">&copy; Netflix 2023</div>
    </div>
  );
};

export default Footer;
