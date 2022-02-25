import React from "react";
import Cell from "./Cell";
import "./Grid.css";

const Grid = ({ gridItems, onIncreaseValue }) => {
const increaseValueHandler = (row, column) => {
  onIncreaseValue(row, column);
}

  return (
    <ul>
      {gridItems.map((cell) => {
        return (
          <Cell
            key={cell.id}
            row={cell.row}
            column={cell.column}
            value={cell.value}
            onIncreaseValue={increaseValueHandler}
          />
        );
      })}
    </ul>
  );
};

export default Grid;
