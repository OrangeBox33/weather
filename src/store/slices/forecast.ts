import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import qs from "qs";
import {
  FactWeather,
  PreparedWeather,
  Weather,
  WeatherResp,
} from "../../types/weather";
import { api } from "../../utils/api";
import { prepareWeather } from "../../utils/prepareData";
import { AppThunk } from "../store";

export interface ForecastState {
  loading: boolean;
  factWeather: FactWeather;
  forecast: Array<Weather>;
  activeForecast: number | null;
}

const initialState: ForecastState = {
  loading: false,
  factWeather: {
    lat: null,
    lon: null,
    condition: null,
    temp: null,
    feelsLike: null,
    windSpeed: null,
    pressure: null,
    humidity: null,
    city: null,
  },
  forecast: [],
  activeForecast: null,
};

const forecast = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setWeather(state, action: PayloadAction<PreparedWeather>) {
      state.factWeather = action.payload.factWeather;
      state.forecast = action.payload.forecast;
    },
    setActiveForecast(state, action: PayloadAction<number>) {
      if (state.activeForecast === action.payload) {
        state.activeForecast = null;
      } else {
        state.activeForecast = action.payload;
      }
    },
  },
});

// Normal actions
export const { setLoading, setWeather, setActiveForecast } = forecast.actions;

// Thunk actions
export const getWeather =
  (lat: number, lon: number): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const data: WeatherResp = await api
        .get(`v2/forecast?${qs.stringify({ lat, lon, lang: "ru_RU" })}`)
        .json();

      const preparedWeather = prepareWeather(data, lat, lon);

      dispatch(setWeather(preparedWeather));
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };

export const forecastReducer = forecast.reducer;
