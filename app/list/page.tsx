"use client";

import TableHeaderComponent from "../components/DataTable/TableHeaderComponent";
import axios from "axios";
import { useState, useEffect } from "react";
import TableRowComponent from "../components/DataTable/TableRowComponent";

const ListEntries = () => {
  
  const [data, setData] = useState([]);
  const [orderBy, setOrderBy] = useState("Date");
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    axios.get("/api/getentries").then((response) => {
      setData(response.data);
    });
  }, []);

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
      const sortedArr = data.sort((a: any, b: any) => {
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
    const sortedArr = data.sort((a: any, b: any) => {
      return Number(new Date(a.createdAt)) - Number(new Date(b.createdAt));
    });
    setData(sortedArr);
  };

  return (
    <div className="mt-3 border-t">
      <TableHeaderComponent
        orderBy={orderBy}
        ascending={isAscending}
        sortBy={sortBy}
      >
        {data.map((entry: any) => (
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

export default ListEntries;
