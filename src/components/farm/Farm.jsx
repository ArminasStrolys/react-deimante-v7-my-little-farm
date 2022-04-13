import React, { useState, useEffect } from "react";
import "./farm.css";
import Square from "../shapes/Square";
import Circle from "../shapes/Circle";

const Farm = () => {
  function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // const [cows, setCows] = useState([]);
  // const [sheep, setSheep] = useState([]);

  const [cows, setCows] = useState([
    localStorage.getItem("cows") !== null
      ? JSON.parse(localStorage.getItem("cows"))
      : console.log('not found')
  ]);
  const [sheep, setSheep] = useState([
    localStorage.getItem("sheep") !== null
      ? JSON.parse(localStorage.getItem("sheep"))
      : null
  ]);

  useEffect(() => {
    localStorage.setItem("cows", JSON.stringify(cows));
  }, [cows]);

  useEffect(() => {
    localStorage.setItem("sheep", JSON.stringify(sheep));
  }, [sheep]);

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

  return (
    <div>
      <div className="announcer">
        <p>FARM</p>
        <button className="eBtn" onClick={fillAnimals}>
          STARTING ENCLOSURE
        </button>
      </div>

      <div className="leftSide">
        <p className="mainTxt">COWS</p>
        <div className="cowEnclosure">
          {cows.map((cow, i) => (
            <Square key={i} num={cow} />
          ))}
        </div>
      </div>
      <div className="rightSide">
        <p className="mainTxt">SHEEP</p>
        <div className="sheepEnclosure">
          {sheep.map((shee, i) => (
            <Circle key={i} num={shee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Farm;
