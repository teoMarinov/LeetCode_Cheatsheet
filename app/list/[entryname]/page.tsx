"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import DesktopDataTable from "../components/DesktopDataTable";
import MobileDataTable from "../components/MobileDataTable";

interface SearchListProps {
  params: {
    entryname: string;
  };
}
const SearchList: React.FC<SearchListProps> = ({ params }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/getentries/${params.entryname}`)
      .then((response) => setData(response.data));
  }, [params.entryname]);

  return (
    <>
      <DesktopDataTable dataProp={data} />
      <MobileDataTable dataProp={data} />
    </>
  );
};

export default SearchList;
