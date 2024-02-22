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

interface HeaderProps {
  userInfo: any
  logOut: () => {};
}

const Header = ({ userInfo, logOut }: HeaderProps) => {
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
      <div className="flex items-center justify-between">
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
            <DropdownMenuLabel>{userInfo?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>{userInfo?.email}</DropdownMenuItem>

            <DropdownMenuItem>
              <Switch
                className="mr-3"
                checked={isChecked}
                onCheckedChange={setIsChecked}
              />{" "}
              {isChecked ? "Dark" : "Light"}
            </DropdownMenuItem>

            <DropdownMenuItem className="flex justify-center">
              <Button onClick={logOut}>Log out</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
