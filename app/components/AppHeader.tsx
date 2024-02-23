"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface HeaderProps {
  userInfo?: any;
}

const AppHeader = ({ userInfo }: HeaderProps) => {

  const [isChecked, setIsChecked] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const logOut = () => signOut({ callbackUrl: "/" });

  const toggleTheme = () => {
    setIsChecked(resolvedTheme === "dark" ? false : true);
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  
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
      {userInfo ? (
        <div className="flex items-center justify-between">
          <Button variant="outline">Add new</Button>
          <Input className="w-4/6" placeholder="Search" />

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://pbs.twimg.com/media/F_ZxnsxXsAAMbYe?format=jpg&name=360x360" />
                <AvatarFallback>LC</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{userInfo?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{userInfo?.email}</DropdownMenuItem>

              <DropdownMenuItem>
                <Switch
                  className="mr-3"
                  checked={isChecked}
                  onCheckedChange={toggleTheme}
                />{" "}
                {resolvedTheme === "dark" ? "Dark" : "Light"}
              </DropdownMenuItem>

              <DropdownMenuItem className="flex justify-center">
                <Button onClick={logOut}>Log out</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default AppHeader;
