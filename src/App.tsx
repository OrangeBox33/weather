import { useEffect } from "react";
import { useGeolocation } from "./hooks/hooks";
import { useTypedDispatch, useTypedSelector } from "./store/hooks";
import { getWeather } from "./store/slices/forecast";
import { FactWeather } from "./components/FactWeather";
import { Forecast } from "./components/Forecast";
import styles from "./App.module.css";
import { CoordControl } from "./components/СoordСontrol";
import { SavedCoords } from "./components/SavedCoords";

function App() {
  const dispatch = useTypedDispatch();
  const { loading } = useTypedSelector((state) => state.forecast);
  const { geoAvailable, lat, lon } = useGeolocation();

  const coordExist = lat && lon;

  useEffect(() => {
    if (coordExist) {
      dispatch(getWeather(lat, lon));
    }
  }, [lat, lon]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.forecastWrapper}>
          {!geoAvailable && <h1>ВКЛЮЧИ ГЕО!!! (пожалуйста)</h1>}
          {geoAvailable && !coordExist && <h1>Обнаружение координат...</h1>}
          {loading && <div className={styles.loading}>Loading...</div>}
          {coordExist && !loading && <FactWeather />}
          {coordExist && !loading && <Forecast />}
        </div>
        <div className={styles.coordWrapper}>
          {coordExist && <CoordControl lat={lat} lon={lon} />}
          {coordExist && <SavedCoords />}
        </div>
      </div>
    </div>
  );
}

export default App;
