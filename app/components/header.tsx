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
import { useState } from "react";
import Link from "next/link";

interface HeaderProps {
  session: number;
}

const Header = ({ session }: HeaderProps) => {
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
        "
    >
      {session ? (
        <div className="flex justify-between">
          <Button variant="outline">Add new</Button>
          <Input className="w-4/6" placeholder="Search" />

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://pbs.twimg.com/media/F_ZxnsxXsAAMbYe?format=jpg&name=360x360" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Your@emaail.com</DropdownMenuItem>

              <DropdownMenuItem>
                <Switch
                  className="mr-3"
                  checked={isChecked}
                  onCheckedChange={setIsChecked}
                />{" "}
                {isChecked ? "Dark" : "Light"}
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Button onClick={() => {}}>Log out</Button>
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

export default Header;
