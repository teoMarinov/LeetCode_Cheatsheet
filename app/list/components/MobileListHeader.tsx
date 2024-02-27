"use client";

import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";

import { useSession } from "next-auth/react";

import { signOut } from "next-auth/react";

import { useRouter } from "next/navigation";
import { useEffect, useState, KeyboardEvent  } from "react";
import UserSheet from "@/components/user-sheeet";

const MobileListHeader = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const session = useSession().data?.user;
  const [search, setSearch] = useState("");

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
