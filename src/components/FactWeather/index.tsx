import { Typography } from "antd";
import { FC } from "react";
import { useTypedSelector } from "../../store/hooks";
import styles from "./style.module.css";
import DoubleRightOutlined, {
  CoffeeOutlined,
  DingtalkOutlined,
  DoubleLeftOutlined,
} from "@ant-design/icons";
import { Degree } from "../Degree";

const { Text } = Typography;

export const FactWeather: FC = () => {
  const { factWeather } = useTypedSelector((state) => state.forecast);

  const {
    temp,
    feelsLike,
    condition,
    windSpeed,
    pressure,
    humidity,
    city,
    lat,
    lon,
  } = factWeather;

  return (
    <div className={styles.container}>
      <div className={styles.temp}>
        <Degree temp={temp} strong fontSize={60} />
      </div>
      <div className={styles.feelsLike}>
        Ощущается как&nbsp;
        <Degree temp={feelsLike} fontSize={20} />
      </div>
      <div className={styles.condition}>
        <Text>{condition}</Text>
      </div>
      <div className={styles.coords}>
        <Text>{`${lat} ${lon}`}</Text>
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
      <div className={styles.city}>
        <Text>{city}</Text>
      </div>
      <div className={styles.time}>
        <Text>localTime</Text>
      </div>
    </div>
  );
};
