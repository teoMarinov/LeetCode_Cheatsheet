"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import DesktopDataTable from "./components/DesktopDataTable";

const ListEntries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/getentries").then((response) => {
      setData(response.data);
    });
  }, []);

  return <DesktopDataTable dataProp={data} />;
};

export default ListEntries;
