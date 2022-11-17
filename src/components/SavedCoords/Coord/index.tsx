import { Button } from "antd";
import { FC } from "react";
import styles from "./style.module.css";

interface iProps {
  name: string;
  editable: number | null;
  handleClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export const Coord: FC<iProps> = ({
  name,
  editable,
  handleClick,
  onEdit,
  onDelete,
}) => {
  return (
    <div className={styles.container}>
      <Button onClick={handleClick}>{name}</Button>
      <Button disabled={editable !== null} onClick={onEdit}>
        edit
      </Button>
      <Button disabled={editable !== null} onClick={onDelete}>
        delete
      </Button>
    </div>
  );
};
