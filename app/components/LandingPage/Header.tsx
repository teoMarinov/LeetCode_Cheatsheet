"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className="
            static
            top-0
            p-3
            border-b
          border-gray-300
            shadow-md
            w-full
        "
    >
      <div className=" flex justify-between px-3">
        <h3 className=" font-semibold">
          Welcome to LeetCode_
          <span
            className=" 
          text-transparent 
          bg-clip-text 
          bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
        from-violet-400 to-violet-700"
          >
            CheatSheet
          </span>
          !
        </h3>
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

export default Header;
