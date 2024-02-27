"use client";

import { FaListUl } from "react-icons/fa";

import { useSession } from "next-auth/react";

import { signOut } from "next-auth/react";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState } from "react";

import UserSheet from "@/components/user-sheeet";

const NewHeader = () => {
  const session = useSession().data?.user;

  const router = useRouter();

  const { resolvedTheme, setTheme } = useTheme();

  const logOut = () => signOut({ callbackUrl: "/" });

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="
              p-3
              border-b
            border-gray-300
            dark:border-gray-600
              shadow-md
              w-full
          "
    >
      <div className="flex items-center justify-between">
        <FaListUl onClick={() => router.push("/list")} size={20} />
        <UserSheet
          name={session?.name!}
          email={session?.email!}
          resolvedTheme={resolvedTheme}
          clickHandler={() => router.push("/new")}
          logOut={logOut}
          toggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
};

export default NewHeader;
