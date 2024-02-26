"use client";

import TableHeaderComponent from "@/app/components/DataTable/TableHeaderComponent";
import TableRowComponent from "@/app/components/DataTable/TableRowComponent";
import { EntryType } from "@/app/types";
import { useEffect, useState } from "react";

interface DesktopDataTableProps {
  dataProp: EntryType[];
}
const DesktopDataTable: React.FC<DesktopDataTableProps> = ({ dataProp }) => {
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
    <div className="mt-3 border-t hidden xl:block">
      <TableHeaderComponent
        orderBy={orderBy}
        ascending={isAscending}
        sortBy={sortBy}
      >
        {data.map((entry: EntryType) => (
          <TableRowComponent
            key={entry.id}
            name={entry.name}
            link={entry.urlTo}
            difficulty={entry.difficulty}
            date={entry.createdAt}
            code={entry.code}
            description={entry.description}
          />
        ))}
      </TableHeaderComponent>
    </div>
  );
};

export default DesktopDataTable;