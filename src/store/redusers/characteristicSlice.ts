import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacteristic } from "../../model/TrainData";

interface characteristicState {
  characteristics: ICharacteristic[];
}

const initialState: characteristicState = {
  characteristics: [],
};

const characteristicSlice = createSlice({
  name: "characteristics",
  initialState: initialState,
  reducers: {
    editSpeed(state, { payload: speed }) {
      state;
      //   state.characteristics.push({
      //     speed: action.payload,
      //   });
    },
    editForce(state, action) {},
    editAmperage(state, action) {},
  },
});
