import React from "react";
import "./shapes.css";

const Circle = (props) => {
  const handle = () => {
    props.remove(props.index, props.num);
  };

  return (
    <div className="circle" onClick={handle}>
      <p className="centerText">{props.num}</p>
    </div>
  );
};

export default Circle;
