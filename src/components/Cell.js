import React, { useEffect, useRef } from "react";

import "./Cell.css";

const Cell = (props) => {
  const liElement = useRef(null);

  useEffect(() => {

    liElement.current.style.backgroundColor = props.value ? "rgb(185, 185, 8)" : "rgb(8, 189, 8)";

    const timer = setTimeout(() => {
      liElement.current.style.backgroundColor = "";
    }, 500);
    return () => clearTimeout(timer);
  }, [props.value]);

  const clickHandler = () => {
    props.onIncreaseValue(props.row, props.column);
  };

  return <li ref={liElement} style={{}} onClick={clickHandler}>{props.value ? props.value : " "}</li>;
};

export default Cell;
