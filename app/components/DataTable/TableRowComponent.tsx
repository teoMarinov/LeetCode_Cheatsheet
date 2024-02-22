"use client";
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";
import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
interface TableRowComponentProps {
  name: string;
  link: string;
  difficulty: string;
  date: string;
  code: string;
  description: string;
}
const TableRowComponent: React.FC<TableRowComponentProps> = ({
  name,
  link,
  difficulty,
  date,
  code,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <TableRow className=" divide-x divide-gray-400">
      <TableCell className="font-medium text-center">
        <a
          className="underline hover:text-sky-700"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </TableCell>
      <TableCell
        className={clsx(
          "font-medium text-center",
          difficulty === "Easy" && "bg-green-500",
          difficulty === "Medium" && "bg-yellow-400",
          difficulty === "Hard" && "bg-red-600"
        )}
      >
        <div>{difficulty}</div>
      </TableCell>
      <TableCell className="text-center">
        <time>{date}</time>
      </TableCell>
      <TableCell>
        <pre
          className={clsx(
            `overflow-hidden font-medium text-wrap pl-2`,
            isOpen || "h-[55px]"
          )}
        >
          <code className="text-lg">{code}</code>
        </pre>
      </TableCell>
      <TableCell className="">
        <pre
          className={clsx(`overflow-hidden text-wrap`, isOpen || "h-[55px]")}
        >
          <p className="font-medium text-lg">{description}</p>
        </pre>
      </TableCell>
      <TableCell onClick={() => setIsOpen(!isOpen)} className="cursor-pointer ">
        <div className="flex flex-col items-center cursor-pointer">
          {isOpen ? <SlArrowUp size={"md"} /> : <SlArrowDown size={"md"} />}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TableRowComponent;
