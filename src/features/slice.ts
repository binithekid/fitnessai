import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pathChoice: "",
  age: "",
  gender: "",
  currentWeight: "",
  desiredWeight: "",
  weightMeasurement: "kg",
};

const dataCollectSlice = createSlice({
  name: "dataCollect",
  initialState,
  reducers: {
    setPathChoice(state, action) {
      state.pathChoice = action.payload;
    },
    setAgeData(state, action) {
      state.age = action.payload;
    },
    setGenderData(state, action) {
      state.gender = action.payload;
    },
    setCurrentWeightData(state, action) {
      state.currentWeight = action.payload;
    },
    setDesiredWeightData(state, action) {
      state.desiredWeight = action.payload;
    },
    setWeightMeasurement(state, action) {
      state.weightMeasurement = action.payload;
    },
  },
});

export const {
  setPathChoice,
  setAgeData,
  setGenderData,
  setCurrentWeightData,
  setDesiredWeightData,
  setWeightMeasurement,
} = dataCollectSlice.actions;
export default dataCollectSlice.reducer;
