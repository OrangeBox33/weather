import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as LStorage from "../../utils/localStorage";
import { Coord, CoordName } from "../../types/coord";
import { AppThunk } from "../store";
import { getWeather } from "./forecast";

export interface CoordState {
  currentPos: Coord;
  saved: CoordName[];
  editable: number;
  active: Coord;
}

const coordKey = "coord";

const initialState: CoordState = {
  currentPos: { lat: null, lon: null },
  saved: JSON.parse(LStorage.getOrCreate(coordKey, JSON.stringify([]))),
  editable: null,
  active: { lat: null, lon: null },
};

const coord = createSlice({
  name: "coord",
  initialState,
  reducers: {
    saveCoord(state, action: PayloadAction<CoordName>) {
      state.saved = [...state.saved, action.payload];
      LStorage.set(coordKey, JSON.stringify(state.saved));
    },
    // setActiveCoord(state, action: PayloadAction<Coord>) {
    //   const { lat, lon } = action.payload;
    //   console.log("!", lat, lon);
    //   state.active = { lat, lon };
    // },
    setEditable(state, action: PayloadAction<number>) {
      state.editable = action.payload;
    },
    deleteCoord(state, action: PayloadAction<number>) {
      state.saved = [
        ...state.saved.slice(0, action.payload),
        ...state.saved.slice(action.payload + 1),
      ];
      LStorage.set(coordKey, JSON.stringify(state.saved));
    },
    changeName(state, action: PayloadAction<{ newName: string; i: number }>) {
      state.saved = [
        ...state.saved.slice(0, action.payload.i),
        { ...state.saved[action.payload.i], name: action.payload.newName },
        ...state.saved.slice(action.payload.i + 1),
      ];
      state.editable = null;
    },
  },
});

// Normal actions
export const { saveCoord, setEditable, deleteCoord, changeName } =
  coord.actions;

// Thunk actions
// export const setActiveCoord =
//   (lat: number, lon: number): AppThunk =>
//   async (dispatch) => {
//     dispatch(setActiveCoord(lat, lon));
//     dispatch(getWeather(lat, lon));
//   };

export const coordReducer = coord.reducer;
