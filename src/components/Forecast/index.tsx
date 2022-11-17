import { FC } from "react";
import { useTypedDispatch, useTypedSelector } from "../../store/hooks";
import { setActiveForecast } from "../../store/slices/forecast";
import { ActiveForecastBlock } from "./ActiveForecastBlock";
import { NormalForecastBlock } from "./NormalForecastBlock";
import styles from "./style.module.css";

export const Forecast: FC = () => {
  const { forecast, activeForecast } = useTypedSelector(
    (state) => state.forecast
  );
  const dispatch = useTypedDispatch();

  return (
    <div className={styles.innerContainer}>
      <div className={styles.outerContainer}>
        {forecast.map((d, i) => (
          <NormalForecastBlock
            key={d.date + d.pressure}
            tempAvg={d.tempAvg}
            date={d.date}
            handleClick={() => dispatch(setActiveForecast(i))}
          />
        ))}
      </div>
      {activeForecast !== null && (
        <ActiveForecastBlock forecast={forecast[activeForecast]} />
      )}
    </div>
  );
};
