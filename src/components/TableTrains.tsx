import React, { useState, useCallback } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { trainsApi, useGetTrainsQuery } from "../store/services/trainsApi";
import { triggerAsyncId } from "async_hooks";
import { ICharacteristic, ITrain } from "../model/TrainData";
import { Typography } from "@mui/material";
import { elementTypeAcceptingRef } from "@mui/utils";
import { TableDescription } from "./TableDescription";

export const TableTrains = () => {
  const { data: trains, isLoading } = trainsApi.useGetTrainsQuery("");

  const [selectedDescription, setSelectedDescription] = useState(false);

  if (isLoading) return <Typography>Loading...</Typography>;

  const [state, setState] = useState(() => selectedCharacteristics(trainName));

  // const [selectedCharacteristics, setSelectedCharacteristics] =
  //   useState<ICharacteristic[]>();

  // const handleCharacteristics = (trainName: string) => {
  //   const selectedCharacteristics = trains?.find(
  //     (item) => item.name === trainName
  //   )?.characteristics;

  //   setSelectedDescription(true);
  // };

  const selectedCharacteristics = (trainName: string) => {
    trains?.find((item) => item.name === trainName)?.characteristics;

    setSelectedDescription(true);
  };

  console.log(selectedCharacteristics);

  return (
    <TableContainer>
      Поезда
      <Table
        sx={{ minWidth: 300, width: "40%", border: "1px solid" }}
        size="small"
      >
        <TableHead sx={{ bgcolor: "rgba(217, 217, 217, 0.2)" }}>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell>Описание</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trains?.map((train) => (
            <TableRow
              onClick={() => setState(train.name)}
              // onClick={() => handleCharacteristics(train.name)}
              key={train.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {train.name}
              </TableCell>
              <TableCell>{train.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedDescription && (
        <TableDescription
          options={selectedCharacteristics || []}
          onOutsideClick={() => setSelectedDescription(false)}
        />
      )}
      {/* <>
        <TableDescription
          onClose={() => setSelectedDescription(false)}
          trains={trains}
        />
      </> */}
    </TableContainer>
  );
};
