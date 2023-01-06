import { configureStore } from "@reduxjs/toolkit";
import dataCollectReducer from "../features/slice";

const store = configureStore({
  reducer: {
    dataCollect: dataCollectReducer,
  },
});

export default store;
