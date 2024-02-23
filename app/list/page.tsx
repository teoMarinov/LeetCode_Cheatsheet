"use client";

import { useSession } from "next-auth/react";
const ListEntries = () => {
  const session = useSession().data;
  return (
    <div className="h-full">
      <p>{JSON.stringify(session.user.id)}</p>
    </div>
  );
};

export default ListEntries;
