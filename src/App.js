import React, { useState } from "react";
import Grid from "./components/Grid";
import "./App.css";

const NUMBER_OF_ROWS = 50;
const NUMBER_OF_COLUMNS = 50;

const App = () => {
  let initialGridItems = [];
  for (var i = 0; i < NUMBER_OF_ROWS; i++) {
    for (var j = 0; j < NUMBER_OF_COLUMNS; j++) {
      initialGridItems.push({
        id: `${i}-${j}`,
        row: i,
        column: j,
        value: 0,
      });
    }
  }

  const [gridItems, setGridItems] = useState(initialGridItems);

  const increaseValueHandler = (row, column, checkFibonacci, value) => {
    console.log(row, column, checkFibonacci, value);
    setGridItems((prevGridItems) => {
      const newGridItems = prevGridItems.map(cell => {
        if (cell.row === row || cell.column === column) {
          return {...cell, value: cell.value++};
        }
      
        return cell;
      });

      console.log("changed!");
      console.log(newGridItems);
      return newGridItems;
    });
  };

  return (
    <div>
      <h2>Fibonacci Grid</h2>
      <Grid gridItems={gridItems} onIncreaseValue={increaseValueHandler} />
    </div>
  );
};

export default App;
