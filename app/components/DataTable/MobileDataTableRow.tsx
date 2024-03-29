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


interface MobileDataTableRowProps {
  name: string;
  link: string;
  difficulty: string;
  date: string;
  code: string;
  description: string;
}
const MobileDataTableRow: React.FC<MobileDataTableRowProps> = ({
  name,
  link,
  difficulty,
  date,
  code,
  description,
}) => {
  return (
    <Accordion type="single" collapsible >
      <AccordionItem value="item-1">
        <AccordionTrigger className="pl-6 md:text-4xl divide-x divide-gray-700 dark:divide-gray-200 gap-x-3">
          <div className=" w-full flex items-center justify-between px-5">
            <p
              className={clsx(
                difficulty === "Easy" && "text-green-500",
                difficulty === "Medium" && "text-yellow-400",
                difficulty === "Hard" && "text-red-600"
              )}
            >
              {name}
            </p>
            <a
              className="underline hover:text-sky-700"
              onClick={(e) => e.stopPropagation()}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLink />
            </a>
          </div>
          <div className="md:text-2xl pr-6 pl-5 text-neutral-600 dark:text-gray-300">
            {format(date, "MM/dd/yyyy")}
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-5 md:text-3xl mb-5">
          <div>
            <header className="md:pt-7 pt-3 pb-5 md:pb-10 text-neutral-600 dark:text-gray-200 pl-1 font-semibold text-xl md:text-4xl">
              Code
            </header>
            <pre>
              <code className="text-wrap ">{code}</code>
            </pre>
          </div>
          <div>
            <header className="md:pt-12 pt-7 pb-4 md:pb-6 text-neutral-600 dark:text-gray-200 pl-1 font-semibold text-xl md:text-4xl">
              Description
            </header>
            <pre>
              <p className="text-wrap ">{description}</p>
            </pre>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MobileDataTableRow;
