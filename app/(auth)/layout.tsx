"use client";
import { IoHome } from "react-icons/io5";

import { useRouter } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <div className="relative h-full flex items-center justify-center">
      <IoHome
        onClick={() => router.push("/")}
        size={48}
        className="absolute top-1 left-1"
      />
      {children}
    </div>
  );
};

export default AuthLayout;
