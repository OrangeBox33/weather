import { FC } from "react";
import { useTypedDispatch, useTypedSelector } from "../../store/hooks";
import { Coord } from "./Coord";
import styles from "./style.module.css";
import { CoordEdition } from "./CoordEdition";
import { getWeather } from "../../store/slices/forecast";
import { changeName, deleteCoord, setEditable } from "../../store/slices/coord";

export const SavedCoords: FC = () => {
  const { saved: savedCoords, editable } = useTypedSelector(
    (state) => state.coord
  );
  const dispatch = useTypedDispatch();

  const handleClick = (lat: number, lon: number) => {
    dispatch(getWeather(lat, lon));
  };

  const onEdit = (i: number) => {
    dispatch(setEditable(i));
  };

  const onDelete = (i: number) => {
    dispatch(deleteCoord(i));
  };

  const onSave = (newName: string, i: number) => {
    dispatch(changeName({ newName, i }));
  };

  return (
    <div className={styles.container}>
      {savedCoords.map((c, i) => {
        if (i === editable) {
          return (
            <CoordEdition
              key={c.name + c.lat + c.lon}
              name={c.name}
              onSave={({ name }) => {
                onSave(name, i);
              }}
            />
          );
        }

        return (
          <Coord
            key={c.name + c.lat + c.lon}
            name={c.name}
            editable={editable}
            handleClick={() => handleClick(c.lat, c.lon)}
            onEdit={() => onEdit(i)}
            onDelete={() => onDelete(i)}
          />
        );
      })}
    </div>
  );
};
