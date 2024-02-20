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

const Header = () => {
  const [session, setSession] = useState(1);

  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className="
            static
            top-0
            p-3
            bg-gray-200
        "
    >
      {session ? (
        <div className="flex justify-between">
          <Button variant="outline">Add new</Button>
          <Input placeholder="Search" />

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
                <Button onClick={() => setSession(0)}>Log out</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className=" flex justify-between">
          <h3>Welcome to LeetCode_Cheatsheet!</h3>
          <p>
            <Link href={"/login"} className=" underline ">
              Login
            </Link>{" "}
            /
            <Link href={"/register"} className=" underline ">
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
