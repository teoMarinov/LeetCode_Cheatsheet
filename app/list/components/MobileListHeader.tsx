"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { RxHamburgerMenu } from "react-icons/rx";
import { FiSun, FiMoon } from "react-icons/fi";

import { useSession } from "next-auth/react";

import { signOut } from "next-auth/react";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState, KeyboardEvent } from "react";
import UserSheet from "@/components/user-sheeet";

const MobileListHeader = () => {
  const session = useSession().data?.user;

  const [search, setSearch] = useState("");
  const router = useRouter();

  const { resolvedTheme, setTheme } = useTheme();

  const logOut = () => signOut({ callbackUrl: "/" });

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push(`/list/${search}`);
    }
  };

  return (
    <div
      className="
      flex 
      gap-x-5 
      w-fill 
      p-5 
      xl:hidden
      border-b
    border-gray-300
    dark:border-gray-600
      shadow-md
    "
    >
      <Input
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search"
      />
      <UserSheet
        name={session?.name!}
        email={session?.email!}
        resolvedTheme={resolvedTheme}
        clickHandler={() => router.push("/new")}
        logOut={logOut}
        toggleTheme={toggleTheme}
      />
    </div>
  );
};

export default MobileListHeader;
