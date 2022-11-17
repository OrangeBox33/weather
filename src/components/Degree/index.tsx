import { Typography } from "antd";
import { FC } from "react";
import styles from "./style.module.css";

const { Text } = Typography;

interface iProps {
  temp: number;
  fontSize?: number;
  strong?: boolean;
}

export const Degree: FC<iProps> = ({ temp, fontSize, strong }) => {
  return (
    <div className={styles.container}>
      <Text style={{ fontSize: `${fontSize}px` }} strong={strong}>
        {temp}
      </Text>
      o
    </div>
  );
};
