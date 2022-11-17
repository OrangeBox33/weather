import {
  CoffeeOutlined,
  DingtalkOutlined,
  DoubleLeftOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import { FC } from "react";
import { Weather } from "../../../types/weather";
import { Degree } from "../../Degree";
import styles from "./style.module.css";

const { Text } = Typography;

interface iProps {
  forecast: Weather;
}

export const ActiveForecastBlock: FC<iProps> = ({
  forecast: {
    tempMin,
    tempMax,
    tempAvg,
    feelsLike,
    condition,
    windSpeed,
    pressure,
    humidity,
    date,
  },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.tempMin}>
        min&nbsp;
        <Degree temp={tempMin} strong fontSize={20} />
      </div>
      <div className={styles.tempMax}>
        max&nbsp;
        <Degree temp={tempMax} strong fontSize={20} />
      </div>
      <div className={styles.tempAvg}>
        avg&nbsp;
        <Degree temp={tempAvg} strong fontSize={20} />
      </div>
      <div className={styles.feelsLike}>
        Ощущается как&nbsp;
        <Degree temp={feelsLike} strong fontSize={20} />
      </div>
      <div className={styles.condition}>
        <span>{condition}</span>
      </div>
      <div className={styles.windSpeed}>
        <DoubleLeftOutlined style={{ fontSize: "20px" }} />
        &nbsp;
        <Text strong>{windSpeed}м/с</Text>
      </div>
      <div className={styles.pressure}>
        <DingtalkOutlined style={{ fontSize: "20px" }} />
        &nbsp;
        <Text strong>{pressure}мм</Text>
      </div>
      <div className={styles.humidity}>
        <CoffeeOutlined style={{ fontSize: "20px" }} />
        &nbsp;
        <Text strong>{humidity}%</Text>
      </div>
      <div className={styles.date}>
        <Text>{date.toString()}</Text>
      </div>
    </div>
  );
};
