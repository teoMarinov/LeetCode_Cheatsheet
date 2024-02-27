"use client";

import NewHeader from "./Headers/NewHeader";

const NewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NewHeader />
      {children}
    </div>
  );
};

export default NewLayout;
