import React from "react";
import "./shapes.css";

const Square = (props) => {
  const theData = () => {
    props.getData({
      index: props.index,
      num: props.num,
    });
  };

  return (
    <div className="square" onClick={theData}>
      <p className="centerText">{props.num}</p>
    </div>
  );
};

export default Square;
