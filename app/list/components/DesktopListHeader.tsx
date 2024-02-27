"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState, KeyboardEvent } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const DesktopListHeader = () => {
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
            <Button variant="outline">{session?.name}</Button>
          </PopoverTrigger>
          <PopoverContent className=" text-center w-44">
            <div className=" break-words">{session?.email}</div>
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
    </div>
  );
};

export default DesktopListHeader;
