"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import DataDisplay from "./components/DataDisplay";

const ListEntries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/getentries").then((response) => {
      setData(response.data);
    });
  }, []);

  return <DataDisplay dataProp={data} />;
};

export default ListEntries;
