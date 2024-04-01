"use client";

import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={150}
        height={150}
        className="animate-pulse"
      />
    </div>
  );
};

export default LoadingPage;
