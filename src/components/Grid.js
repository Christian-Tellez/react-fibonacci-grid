import React from "react";
import Cell from "./Cell";
import "./Grid.css";

const Grid = ({ gridItems, onIncreaseValue }) => {
const increaseValueHandler = (row, column, checkFibonacci, value) => {
  onIncreaseValue(row, column, checkFibonacci, value);
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
