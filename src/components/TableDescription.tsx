import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { trainsApi, useGetTrainsQuery } from "../store/services/trainsApi";
import { ICharacteristic, ITrain } from "../model/TrainData";
import { Typography } from "@mui/material";

interface TableDescriptionProps {
  onOutsideClick: () => void;
  options: ICharacteristic[];
}

export const TableDescription = ({
  onOutsideClick,
  options,
}: TableDescriptionProps) => {
  // const handleCharacteristics = (trainName: string) => {
  //   const selectedCharacteristics = trains?.find(
  //     (item) => item.name === trainName
  //   )?.characteristics;
  //   console.log(selectedCharacteristics);
  // };

  return (
    <Table
      sx={{ minWidth: 300, width: "40%", border: "1px solid" }}
      size="small"
    >
      <TableHead sx={{ bgcolor: "rgba(217, 217, 217, 0.2)" }}>
        <TableRow>
          <TableCell>Скорость</TableCell>
          <TableCell>Сила</TableCell>
          <TableCell>Описание</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {options?.map((option, index) => (
          <TableRow
            key={index}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {option.speed}
            </TableCell>
            <TableCell>{option.force}</TableCell>
            <TableCell>{option.engineAmperage}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
