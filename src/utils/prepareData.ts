import { PreparedWeather, WeatherResp } from "../types/weather";

export const prepareWeather = (
  data: WeatherResp,
  lat: number,
  lon: number
): PreparedWeather => {
  const { fact, forecasts, geo_object } = data;

  return {
    forecast: forecasts.slice(0, 4).map((day) => {
      let tempAvg = 0;
      let tempMin = Infinity;
      let tempMax = -Infinity;
      let pressure = 0;
      let windSpeed = 0;
      let humidity = 0;
      let feelsLike = 0;

      day.hours.forEach((h) => {
        tempAvg += h.temp;
        pressure += h.pressure_mm;
        windSpeed += h.wind_speed;
        humidity += h.humidity;
        feelsLike += h.feels_like;

        if (h.temp < tempMin) {
          tempMin = h.temp;
        }

        if (h.temp > tempMax) {
          tempMax = h.temp;
        }
      });

      return {
        tempMin: tempMin,
        tempMax: tempMax,
        tempAvg: Math.round(tempAvg / day.hours.length),
        feelsLike: Math.round(feelsLike / day.hours.length),
        condition: day.hours[0].condition,
        windSpeed: Math.round(windSpeed / day.hours.length),
        pressure: Math.round(pressure / day.hours.length),
        humidity: Math.round(humidity / day.hours.length),
        date: day.date.split("-").slice(1).reverse().join("/"),
      };
    }),
    factWeather: {
      lat,
      lon,
      temp: fact.temp,
      condition: fact.condition,
      feelsLike: fact.feels_like,
      windSpeed: fact.wind_speed,
      pressure: fact.pressure_mm,
      humidity: fact.humidity,
      city: geo_object.locality?.name || "no locality",
    },
  };
};
