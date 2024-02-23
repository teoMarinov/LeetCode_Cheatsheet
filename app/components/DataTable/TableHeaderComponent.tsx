"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";
import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { IoIosInformationCircleOutline } from "react-icons/io";

interface TableHeaderComponentProps {
  children: React.ReactNode;
}
const TableHeaderComponent: React.FC<TableHeaderComponentProps> = ({
  children,
}) => {
  return (
    <Table className="mb-14 border-x dark:text-gray-400 border-b border-gray-200 shadow-md">
      <TableHeader>
        <TableRow className=" divide-x divide-gray-400">
          <TableHead className="w-[11%]">Name</TableHead>
          <TableHead className="w-[5%]">Difficulty</TableHead>
          <TableHead className="w-[5%]">Date</TableHead>
          <TableHead className="w-[42%]">Code</TableHead>
          <TableHead className="w-[35%]">Description</TableHead>
          <TableHead>
            <IoIosInformationCircleOutline size={"lg"} />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  );
};

export default TableHeaderComponent;
