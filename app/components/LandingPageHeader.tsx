"use client";

import Link from "next/link";

const LandingPageHeader = () => {

  return (
    <div
      className="
            static
            top-0
            p-3
            border-b
          border-gray-300
          dark:border-gray-600
            shadow-md
            w-full

        "
    >
      <div className=" flex justify-between px-3">
        <Link href={"/"} className=" font-semibold">
          Welcome to LeetCode_
          <span
            className=" 
          text-transparent 
          bg-clip-text 
          bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
        from-violet-400 to-violet-700
         "
          >
            CheatSheet
          </span>
          !
        </Link>
        <p className=" font-medium">
          <Link href={"/login"} className=" underline hover:text-sky-700 ">
            Login
          </Link>{" "}
          /
          <Link href={"/register"} className=" underline hover:text-sky-700 ">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LandingPageHeader;
