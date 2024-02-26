"use client";

import { ColumnDef } from "@tanstack/react-table";

import { EntryType } from "../types";

import { format } from "date-fns";

import clsx from "clsx";
import { useState } from "react";

let isOpen = false;
console.log("🚀 ~ isOpen:", isOpen);

export const columns: ColumnDef<EntryType>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <a
          className="underline hover:text-sky-700"
          onClick={(e) => e.stopPropagation()}
          href={row.getValue("urlTo")}
          target="_blank"
          rel="noopener noreferrer"
        >
          {row.getValue("name")}
        </a>
      );
    },
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
    cell: ({ row }) => {
      const difficulty = row.getValue("difficulty");
      return (
        <div
          className={clsx(
            difficulty === "Easy" && "text-green-500",
            difficulty === "Medium" && "text-yellow-500",
            difficulty === "Hard" && "text-red-500"
          )}
        >
          {row.getValue("difficulty")}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => {
      const formatted = format(row.getValue("createdAt"), "MM/dd/yyyy");

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "urlTo",
    header: "",
    cell: () => {
      return null;
    },
  },
  {
    accessorKey: "code",
    header: "Code",
    cell: ({ row }) => {
      return (
        <pre className={clsx(isOpen || "line-clamp-2")}>
          <code className="text-lg">{row.getValue("code")}</code>
        </pre>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return (
        <pre className={clsx(isOpen || "line-clamp-2")}>
          <p className="font-medium text-lg text-wrap">
            {row.getValue("description")}
          </p>
        </pre>
      );
    },
  },
  {
    header: "Open",
    cell: () => {
      return (
        <button
          onClick={() => {
            isOpen = !isOpen;
            console.log(isOpen);
          }}
        >
          Open
        </button>
      );
    },
  },
];
