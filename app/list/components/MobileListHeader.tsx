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

interface MobileListHeaderProps {
  userInfo?: any;
}
const MobileListHeader: React.FC<MobileListHeaderProps> = ({}) => {
  
  const session = useSession().data?.user;

  const router = useRouter();

  const [search, setSearch] = useState("");

  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const logOut = () => signOut({ callbackUrl: "/" });

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push(`/list/${search}`);
    }
  };

  return (
    <div className=" flex gap-x-5 w-fill p-5 bg-neutral-500 xl:hidden">
      <Input
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search"
      />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <RxHamburgerMenu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="gap-y-6">
            <SheetTitle className="text-center md:text-5xl text-3xl">
              {session?.name}
            </SheetTitle>
            <SheetDescription className="break-words md:text-3xl text-xl text-center">
              {session?.email}
            </SheetDescription>
          </SheetHeader>

          <Button onClick={() => router.push("/new")} variant="outline">
            Add new
          </Button>

          <div className="py-10 flex flex-col items-center gap-y-2 md:gap-y-4">
            <p className="md:text-xl">Theme</p>
            {resolvedTheme === "dark" ? (
              <FiMoon size={48} onClick={toggleTheme} />
            ) : (
              <FiSun size={48} onClick={toggleTheme} />
            )}
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Button className="w-full" onClick={logOut}>
                Log out
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileListHeader;
