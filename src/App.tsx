import React from "react";
import { Container } from "@mui/material";
import { TableTrains } from "./components/TableTrains";
import { trainsApi, useGetTrainsQuery } from "./store/services/trainsApi";

function App() {
  // const { data: trains, isLoading } = trainsApi.useGetTrainsQuery("");
  // console.log(trains);

  return (
    <>
      <TableTrains />
    </>
  );
}

export default App;
