"use client";

import Header from "./Header";
import { useSession, signOut } from "next-auth/react";
const ListEntries = () => {
  const session = useSession();
  const logOut = () => signOut({ callbackUrl: "/" });
  return (
    <div className="h-full">
      <Header userInfo={session?.data?.user} logOut={logOut} />
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default ListEntries;
