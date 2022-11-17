export interface WeatherBase {
  condition: string;
  feelsLike: number;
  windSpeed: number;
  pressure: number;
  humidity: number;
}

export interface WeatherResp {
  fact: {
    temp: number;
    feels_like: number;
    condition: string;
    wind_speed: number;
    pressure_mm: number;
    humidity: number;
  };
  forecasts: {
    hours: {
      temp: number;
      wind_speed: number;
      pressure_mm: number;
      humidity: number;
      feels_like: number;
      condition: string;
    }[];
    date: string;
  }[];
  geo_object: {
    locality: {
      name: string;
    };
  };
}

export interface FactWeather extends WeatherBase {
  lat: number;
  lon: number;
  temp: number;
  city: string;
}

export interface Weather extends WeatherBase {
  tempMin: number;
  tempMax: number;
  tempAvg: number;
  date: string;
}

export interface PreparedWeather {
  factWeather: FactWeather;
  forecast: Array<Weather>;
}
