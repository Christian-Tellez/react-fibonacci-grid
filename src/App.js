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
  console.log(initialGridItems);
  console.log(initialGridItems.length);

  const [gridItems, setGridItems] = useState(initialGridItems);

  // const addExpenseHandler = (expense) => {
  //   console.log("In App.js: ");
  //   console.log(expense);

  //   setExpenses((prevExpenses) => {
  //     return [expense, ...prevExpenses];
  //   });
  // };

  return (
    <div>
      <h2>Fibonacci Grid</h2>
      <Grid gridItems={gridItems} />
    </div>
  );
};

export default App;
