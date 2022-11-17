import { combineReducers } from "@reduxjs/toolkit";
import { coordReducer } from "./slices/coord";
import { forecastReducer } from "./slices/forecast";

const reducers = {
  forecast: forecastReducer,
  coord: coordReducer,
};

export const rootReducer = combineReducers(reducers);

// export type RootState = ReturnType<typeof rootReducer>;
