import React from "react";
import "./shapes.css";

const Square = (props) => {
  return (
    <div className="square">
      <p className="centerText">{props.num}</p>
    </div>
  );
};

export default Square;
