"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState, KeyboardEvent } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  userInfo?: any;
}

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const AppHeader = ({ userInfo }: HeaderProps) => {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

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
            static
            top-0
            p-3
            border-b
          border-gray-300
          dark:border-gray-600
            shadow-md
            w-full
            hidden 
            xl:block
        "
    >
      {userInfo ? (
        <div className="flex items-center justify-between">
          <Button onClick={() => router.push("/new")} variant="outline">
            Add new
          </Button>
          <Input
            onChange={(e) => setSearch(e.target.value)}
            className="w-4/6"
            placeholder="Search"
            onKeyDown={handleKeyDown}
          />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">{userInfo?.name}</Button>
            </PopoverTrigger>
            <PopoverContent className=" text-center w-44">
              <div className=" break-words">{userInfo?.email}</div>
              <span className="block my-5">
                <Switch
                  className="mr-3"
                  checked={resolvedTheme === "dark" ? true : false}
                  onCheckedChange={toggleTheme}
                />{" "}
                {resolvedTheme === "dark" ? "Dark" : "Light"}
              </span>
              <Button onClick={logOut}>Log out</Button>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default AppHeader;
