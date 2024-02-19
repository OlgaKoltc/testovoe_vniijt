import { ITrain } from "./../../model/TrainData";
import { createSlice } from "@reduxjs/toolkit";

interface trainState {
  trains: ITrain[];
  isLoading: boolean;
  //addTrain: (train: ITrain) => void;
}

const initialState: trainState = {
  trains: [],
  isLoading: false,
};

const trainSlice = createSlice({
  name: "trains",
  initialState: initialState,
  reducers: {
    // toggleTrain: (state, { payload: train }) => {
    //   const isExist = state.some((t) => t.name === train.name);
    //   if (isExist) state = state.filter((t) => t.name !== train.name);
    //   else state.push(train);},
  },
});
export const { actions } = trainSlice;
