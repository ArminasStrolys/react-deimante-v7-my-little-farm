import React from "react";
import "./shapes.css";

const Square = (props) => {
  const handle = () => {
    props.remove(props.index, props.num);
  };

  return (
    <div className="square" onClick={handle}>
      <p className="centerText">{props.num}</p>
    </div>
  );
};

export default Square;
