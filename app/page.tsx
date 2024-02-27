"use client";

import TableHeaderComponent from "@/app/components/DataTable/TableHeaderComponent";
import TableRowComponent from "@/app/components/DataTable/TableRowComponent";

import dummyData from "@/app/common/landingPageDummyData";
import LandingPageHeader from "./components/LandingPageHeader";

export default function Home() {
  const test = ["Easy", "Medium", "Hard"];
  return (
    <div className="flex flex-col items-center">
      <LandingPageHeader />
      <div className="pt-60 flex flex-col gap-y-10 w-[98%]">
        <h1 className="text-7xl text-center font-bold">
          LeetCode_
          <span
            className="
        block 
        text-transparent 
        bg-clip-text 
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
      from-violet-400 to-violet-700"
          >
            CheatSheet
          </span>
        </h1>
        <h3 className="text-4xl text-center font-semibold">
          Your{" "}
          <span
            className=" 
        text-transparent 
        bg-clip-text 
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
      from-violet-400 to-violet-700"
          >
            CheatSheet
          </span>{" "}
          to write down the solutions for all LeetCode problems you{"'"}ve
          solved!
        </h3>
        {/* <TableHeaderComponent>
          {test.map((item) => (
            <TableRowComponent
              key={item}
              name={dummyData.name}
              link={dummyData.link}
              difficulty={item}
              date={dummyData.date}
              code={dummyData.code}
              description={dummyData.description}
            />
          ))}
        </TableHeaderComponent> */}
        
      </div>
    </div>
  );
}
