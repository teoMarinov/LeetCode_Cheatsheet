"use client";

import { EntryType } from "@/app/types";
import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { CiLink } from "react-icons/ci";

import { format } from "date-fns";
import clsx from "clsx";

interface MobileDataTableProps {
  dataProp: EntryType[];
}
const MobileDataTable: React.FC<MobileDataTableProps> = ({ dataProp }) => {
  const [data, setData] = useState<EntryType[]>([]);
  const [orderBy, setOrderBy] = useState("Date");
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    setData(dataProp);
  }, [dataProp]);

  const sortBy = (field: string) => {
    if (orderBy === field) {
      setData(data.reverse());
      setIsAscending(!isAscending);
    } else {
      setOrderBy(field);
      setIsAscending(true);
      switch (field) {
        case "Name":
          return sortByName();
        case "Date":
          return sortByDate();
        case "Difficulty":
          return sortByDifficulty();
      }
    }
  };

  const sortByName = () => {
    const sortedArr = data.sort((a: any, b: any) => {
      return a.name.localeCompare(b.name);
    });
    setData(sortedArr);
  };

  const sortByDifficulty = () => {
    const sortedArr = data.sort((a: EntryType, b: EntryType) => {
      const difficultyOrder: any = {
        Easy: 0,
        Medium: 1,
        Hard: 2,
      };
      return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
    });
    setData(sortedArr);
  };

  const sortByDate = () => {
    const sortedArr = data.sort((a: EntryType, b: EntryType) => {
      return Number(new Date(a.createdAt)) - Number(new Date(b.createdAt));
    });
    setData(sortedArr);
  };
  return (
    <div className=" xl:hidden ">
      {data.map((entry: EntryType) => (
        <Accordion type="single" collapsible key={entry.id}>
          <AccordionItem value="item-1">
            <AccordionTrigger className="pl-6 md:text-4xl divide-x divide-gray-700 dark:divide-gray-200 gap-x-3">
              <div className=" w-full flex items-center justify-between px-5">
                <p
                  className={clsx(
                    entry.difficulty === "Easy" && "text-green-500",
                    entry.difficulty === "Medium" && "text-yellow-400",
                    entry.difficulty === "Hard" && "text-red-600"
                  )}
                >
                  {entry.name}
                </p>
                <a
                  className="underline hover:text-sky-700"
                  onClick={(e) => e.stopPropagation()}
                  href={entry.urlTo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiLink />
                </a>
              </div>
              <div className="md:text-2xl pr-6 pl-5 text-gray-300">
                {format(entry.createdAt, "MM/dd/yyyy")}
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-5 md:text-3xl mb-5">
              <div>
                <header className="md:pt-7 pt-3 pb-5 md:pb-10 text-gray-200 pl-1 font-semibold text-xl md:text-4xl">
                  Code
                </header>
                <pre>
                  <code className="text-wrap ">{entry.code}</code>
                </pre>
              </div>
              <div>
                <header className="md:pt-12 pt-7 pb-4 md:pb-6 text-gray-200 pl-1 font-semibold text-xl md:text-4xl">
                  Description
                </header>
                <pre>
                  <p className="text-wrap ">{entry.description}</p>
                </pre>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default MobileDataTable;
