import React, { useState, useEffect } from "react";
import "./farm.css";
import Square from "../shapes/Square";
import Circle from "../shapes/Circle";

const Farm = () => {
  function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const [cows, setCows] = useState([]);
  const [cowsToSheep, setCowsToSheep] = useState([]);
  const [sheep, setSheep] = useState([]);
  const [sheepToCows, setSheepToCows] = useState([]);
  const [renderer, setRenderer] = useState("");

  const fillAnimals = () => {
    const startingCows = rndNum(5, 20);
    const startingSheep = rndNum(5, 20);

    for (let i = 0; i < startingCows; i++) {
      cows.push("C00" + rndNum(10000, 99999));
    }
    setCows([...cows]);

    for (let i = 0; i < startingSheep; i++) {
      sheep.push("S00" + rndNum(10000, 99999));
    }
    setSheep([...sheep]);

    console.log(sheep);
    console.log(cows);
  };

  const removeCow = (data) => {
    cows.splice(data.index, 1);
    cowsToSheep.push(data.num);
    setCowsToSheep(cowsToSheep);
    setRenderer(data);
  };

  const removeSheep = (data) => {
    sheep.splice(data.index, 1);
    sheepToCows.push(data.num);
    setSheepToCows(sheepToCows);
    setRenderer(data);
  };
  const unmoveSheep = (data) => {
    sheepToCows.splice(data.index, 1);
    sheep.push(data.num);
    setSheep(sheep);
    setRenderer(data);
  };
  const unmoveCow = (data) => {
    cowsToSheep.splice(data.index, 1);
    cows.push(data.num);
    setCows(cows);
    setRenderer(data);
  };

  return (
    <div>
      <div className="announcer">
        <p>FARM</p>
        <button className="eBtn" onClick={fillAnimals}>
          STARTING ENCLOSURE
        </button>
      </div>

      <div className="leftSide">
        <p className="mainTxt">
          COWS: {cows.length}{" "}
          {sheepToCows.length > 0 && "SHEEP: " + sheepToCows.length}
        </p>
        <div className="cowEnclosure">
          {cows.map((cow, i) => (
            <Square key={i} num={cow} index={i} getData={removeCow} />
          ))}
          {sheepToCows.length > 0 &&
            sheepToCows.map((shee, i) => (
              <Circle key={i} num={shee} index={i} getData={unmoveSheep} />
            ))}
        </div>
      </div>
      <div className="rightSide">
        <p className="mainTxt">
          SHEEP: {sheep.length}{" "}
          {cowsToSheep.length > 0 && "COWS: " + cowsToSheep.length}
        </p>
        <div className="sheepEnclosure">
          {sheep.map((shee, i) => (
            <Circle key={i} num={shee} index={i} getData={removeSheep} />
          ))}
          {cowsToSheep.length > 0 &&
            cowsToSheep.map((cow, i) => (
              <Square key={i} num={cow} index={i} getData={unmoveCow} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Farm;
