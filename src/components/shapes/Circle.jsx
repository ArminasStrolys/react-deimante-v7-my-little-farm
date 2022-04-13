import React from "react";
import "./shapes.css";

const Circle = (props) => {
  return (
    <div className="circle">
      <p className="centerText">{props.num}</p>
    </div>
  );
};

export default Circle;
