import React, { useState } from "react";
import Grid from "./components/Grid";
import "./App.css";

const NUMBER_OF_ROWS = 50;
const NUMBER_OF_COLUMNS = 50;
const CONSECUTIVE_NUMBERS_FIBONACCI = 5;

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

  const isPerfectSquare = (number) => {
    const square = parseInt(Math.sqrt(number));
    return square * square === number;
  };

  const isFibonacci = (number) => {
    return (
      isPerfectSquare(5 * number * number + 4) ||
      isPerfectSquare(5 * number * number - 4)
    );
  };

  function checkIsFibonacci(arr, n) {
    if (n === 1 || n === 2) return true;

    for (i = 2; i < n; i++) {
      if (arr[i - 1] + arr[i - 2] !== arr[i]) return false;
    }
    return true;
  }

  const increaseValueHandler = (row, column) => {
    setGridItems((prevGridItems) => {
      let newGridItems = prevGridItems.map((cell) => {
        if (cell.row === row || cell.column === column) {
          return { ...cell, value: cell.value++ };
        }
        return cell;
      });

      const cellsIncreased = newGridItems.filter((cell) => {
        return cell.row === row || cell.column === column;
      });

      cellsIncreased.map((cell1) => {
        // let valueUpdated = cell1.value + 1;
        // console.log(valueUpdated);
        if (!isFibonacci(cell1.value)) return cell1;

        const possibleFibonacciSequenceRow = newGridItems.filter((cell2) => {
          return (
            cell2.row === cell1.row &&
            cell2.column > cell1.column - CONSECUTIVE_NUMBERS_FIBONACCI &&
            cell2.column < cell1.column + CONSECUTIVE_NUMBERS_FIBONACCI
          );
        });

        const possibleFibonacciSequenceColumn = newGridItems.filter((cell) => {
          return (
            cell.column === column &&
            cell.row > row - CONSECUTIVE_NUMBERS_FIBONACCI &&
            cell.row < row + CONSECUTIVE_NUMBERS_FIBONACCI
          );
        });

        // console.log("New cell!");

        for (let i = 0; i < possibleFibonacciSequenceRow.length; i++) {
          let slicedGridItems = possibleFibonacciSequenceRow.slice(i, i + 5);
          if (slicedGridItems.length < CONSECUTIVE_NUMBERS_FIBONACCI) break;

          // console.log(slicedGridItems);
          let slicedValues = slicedGridItems.map((cell3) => cell3.value);
          // console.log(slicedValues);
          if (!checkIsFibonacci(slicedValues, slicedValues.length)) break;

          slicedGridItems.map((cell4) => {
            const cellIndex = newGridItems.findIndex(
              (cell5) => cell5.id === cell4.id
            );
            newGridItems[cellIndex].value = 0;
          });
          // newGridItems = [{ ...newGridItems}, {slicedGridItems}];
        }

        for (let i = 0; i < possibleFibonacciSequenceColumn.length; i++) {
          let slicedGridItems = possibleFibonacciSequenceColumn.slice(i, i + 5);
          if (slicedGridItems.length < CONSECUTIVE_NUMBERS_FIBONACCI) break;

          // console.log(slicedGridItems);
          let slicedValues = slicedGridItems.map((cell3) => cell3.value);
          console.log(slicedValues);
          if (!checkIsFibonacci(slicedValues, slicedValues.length)) break;

          slicedGridItems.map((cell4) => {
            const cellIndex = newGridItems.findIndex(
              (cell5) => cell5.id === cell4.id
            );
            newGridItems[cellIndex].value = 0;
          });
          // newGridItems = [{ ...newGridItems}, {slicedGridItems}];
        }

        // return cell;
      });

      // console.log("changed!");
      // console.log(newGridItems);
      // console.log(prevGridItems);
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
