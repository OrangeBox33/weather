import ky from "ky";

export const api = ky.create({
  prefixUrl: "http://localhost:8010/proxy", // https://api.weather.yandex.ru
  headers: { "X-Yandex-API-Key": "f64e4d00-fdf5-4505-a47d-526a0682ade3" },
});
