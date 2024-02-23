"use client";
import { TableCell, TableRow } from "@/components/ui/table";
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
    <TableRow className={clsx("divide-x divide-gray-400")}>
      <TableCell className="font-medium text-center">
        <a
          className="underline hover:text-sky-700"
          onClick={(e) => e.stopPropagation()}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </TableCell>
      <TableCell
        className={clsx(
          "font-medium text-center text-black",
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
      <TableCell
        className={clsx(isOpen || "cursor-pointer")}
        onClick={() => setIsOpen(true)}
      >
        <pre
          className={clsx(
            `overflow-hidden font-medium text-wrap pl-2`,
            isOpen || "line-clamp-2"
          )}
        >
          <code className="text-lg">{code}</code>
        </pre>
      </TableCell>
      <TableCell
        className={clsx(isOpen || "cursor-pointer")}
        onClick={() => setIsOpen(true)}
      >
        <pre
          className={clsx(
            `overflow-hidden text-wrap`,
            isOpen || "line-clamp-2"
          )}
        >
          <p className="font-medium text-lg">{description}</p>
        </pre>
      </TableCell>
      <TableCell
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className={clsx("cursor-pointer", isOpen && "bg-red-600/55")}
      >
        <div className={clsx("flex flex-col items-center cursor-pointer")}>
          {isOpen ? (
            <SlArrowUp color="white" size={"md"} />
          ) : (
            <SlArrowDown color="white" size={"md"} />
          )}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TableRowComponent;
