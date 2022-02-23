import React, { useEffect } from "react";

import "./Cell.css";

const Cell = (props) => {
  const isPerfectSquare = (number) => {
    const square = parseInt(Math.sqrt(number));
    return (square * square === number);
  }

  const isFibonacci = (number) => {
    return isPerfectSquare(5 * number * number + 4) ||
           isPerfectSquare(5 * number * number - 4);
  }

  const clickHandler = () => {
    const checkFibonacci = isFibonacci(props.value + 1);
    props.onIncreaseValue(props.row, props.column, checkFibonacci, props.value + 1);
  };

  return <li onClick={clickHandler} className={}>{props.value ? props.value : " "}</li>;
};

export default Cell;
