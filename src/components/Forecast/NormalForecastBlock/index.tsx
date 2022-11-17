import { FC } from "react";
import { Degree } from "../../Degree";
import styles from "./style.module.css";

interface iProps {
  tempAvg: number;
  date: string;
  handleClick: () => void;
}

export const NormalForecastBlock: FC<iProps> = ({
  tempAvg,
  date,
  handleClick,
}) => {
  return (
    <div className={styles.container} onClick={(e) => handleClick()}>
      <span className={styles.tempAvg}>
        <Degree temp={tempAvg} strong fontSize={20} />
      </span>
      <span className={styles.date}>{date}</span>
    </div>
  );
};
