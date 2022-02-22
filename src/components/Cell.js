import React from "react";

import "./Cell.css";

const Cell = (props) => {
  const clickHandler = () => {
    props.onIncreaseValue(props.row, props.column);
  };

  return <li onClick={clickHandler}>{props.value ? props.value : " "}</li>;
};

export default Cell;
