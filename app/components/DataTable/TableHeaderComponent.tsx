"use client";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowDownIcon } from "@radix-ui/react-icons";

import { IoIosInformationCircleOutline } from "react-icons/io";

import { SlArrowDown, SlArrowUp } from "react-icons/sl";

interface TableHeaderComponentProps {
  children: React.ReactNode;
  ascending: boolean;
  orderBy: string;
  sortBy: (field: string) => void;
}
const TableHeaderComponent: React.FC<TableHeaderComponentProps> = ({
  children,
  ascending,
  orderBy,
  sortBy,
}) => {
  return (
    <Table className="mb-14 border-x dark:text-gray-400 border-b border-gray-200 shadow-md">
      <TableHeader>
        <TableRow className=" divide-x divide-gray-400 ">
          <TableHead
            onClick={() => sortBy("Name")}
            className="w-[10%] cursor-pointer select-none"
          >
            <p className="flex h-full items-center justify-center">
              <span className="mr-2">Name</span>
              {orderBy === "Name" &&
                (ascending ? <SlArrowDown /> : <SlArrowUp />)}
            </p>
          </TableHead>
          <TableHead
            onClick={() => sortBy("Difficulty")}
            className={"w-[6%] cursor-pointer select-none"}
          >
            <p className="flex h-full items-center justify-center">
              <span className="mr-2">Difficulty</span>
              {orderBy === "Difficulty" &&
                (ascending ? <SlArrowDown /> : <SlArrowUp />)}
            </p>
          </TableHead>
          <TableHead
            onClick={() => sortBy("Date")}
            className="w-[6%] cursor-pointer select-none"
          >
            <p className="flex h-full items-center justify-center">
              <span className="mr-2">Date</span>
              {orderBy === "Date" &&
                (ascending ? <SlArrowDown /> : <SlArrowUp />)}
            </p>
          </TableHead>
          <TableHead className="w-[42%] ">
            <p className="flex h-full items-center justify-center">Code</p>
          </TableHead>
          <TableHead className="w-[35%]">
            <p className="flex h-full items-center justify-center">Explanation</p>
          </TableHead>
          <TableHead className="flex justify-center items-center ">
            <IoIosInformationCircleOutline size={20} />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  );
};

export default TableHeaderComponent;
