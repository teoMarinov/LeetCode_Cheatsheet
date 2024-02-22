"use client";

import Header from "./Header";
import { useSession, signOut } from "next-auth/react";
import { getUserByEmail } from "@/app/actions/getUserByEmail";
const ListEntries = () => {
  const session = useSession();
  return (
    <div className="h-full">
      <Header userInfo={session?.data?.user} logOut={() => signOut()} />
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default ListEntries;
