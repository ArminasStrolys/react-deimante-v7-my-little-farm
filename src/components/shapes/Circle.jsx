import React from "react";
import "./shapes.css";

const Circle = (props) => {
  const theData = () => {
    props.getData({
      index: props.index,
      num: props.num,
    });
  };

  return (
    <div className="circle" onClick={theData}>
      <p className="centerText">{props.num}</p>
    </div>
  );
};

export default Circle;
