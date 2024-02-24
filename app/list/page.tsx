"use client";

import TableHeaderComponent from "../components/DataTable/TableHeaderComponent";
import axios from "axios";
import { useState, useEffect } from "react";
import TableRowComponent from "../components/DataTable/TableRowComponent";

const ListEntries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/getentries").then((response) => setData(response.data));
  }, []);

  return (
      <TableHeaderComponent>
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
  );
};

export default ListEntries;
