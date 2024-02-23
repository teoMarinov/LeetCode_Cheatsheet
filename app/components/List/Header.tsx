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

interface HeaderProps {
  userInfo: any;
  logOut: () => {};
}

const Header = ({ userInfo, logOut }: HeaderProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) return null;
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
        "
    >
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
    </div>
  );
};

export default Header;
