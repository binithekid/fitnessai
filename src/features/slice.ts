import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pathChoice: "",
  age: "",
  gender: "",
  currentWeight: "",
  weightMeasurement: "kg",
  howActive: "",
  dietaryPreferences: "",
  dailyProteinIntake: "",
  dailyCalorieIntake: "",
  selectedPlan: "",
  selectedMeal: "",
  selectedCuisine: "",
  height: "",
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
    setWeightMeasurement(state, action) {
      state.weightMeasurement = action.payload;
    },
    setHowActive(state, action) {
      state.howActive = action.payload;
    },
    setDietaryPreferences(state, action) {
      state.dietaryPreferences = action.payload;
    },
    setDailyProteinIntake(state, action) {
      state.dailyProteinIntake = action.payload;
    },
    setDailyCalorieIntake(state, action) {
      state.dailyCalorieIntake = action.payload;
    },
    setSelectedPlan(state, action) {
      state.selectedPlan = action.payload;
    },
    setSelectedMeal(state, action) {
      state.selectedMeal = action.payload;
    },
    setSelectedCuisine(state, action) {
      state.selectedCuisine = action.payload;
    },
    setUserHeight(state, action) {
      state.height = action.payload;
    },
  },
});

export const {
  setPathChoice,
  setAgeData,
  setGenderData,
  setCurrentWeightData,
  setWeightMeasurement,
  setHowActive,
  setDietaryPreferences,
  setDailyProteinIntake,
  setDailyCalorieIntake,
  setSelectedPlan,
  setSelectedMeal,
  setSelectedCuisine,
  setUserHeight,
} = dataCollectSlice.actions;
export default dataCollectSlice.reducer;
