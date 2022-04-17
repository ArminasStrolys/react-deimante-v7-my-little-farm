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

  // const [cows, setCows] = useState([
  //   localStorage.getItem("cows") !== null
  //     ? JSON.parse(localStorage.getItem("cows"))
  //     : console.log('not found')
  // ]);
  // const [sheep, setSheep] = useState([
  //   localStorage.getItem("sheep") !== null
  //     ? JSON.parse(localStorage.getItem("sheep"))
  //     : null
  // ]);

  // useEffect(() => {
  //   localStorage.setItem("cows", JSON.stringify(cows));
  // }, [cows]);

  // useEffect(() => {
  //   localStorage.setItem("sheep", JSON.stringify(sheep));
  // }, [sheep]);

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






  const removeSheep = (index, num) => {
    // console.log("remove: ", index, " num: ", num);
    sheep.splice(index, 1);
    sheepToCows.push(num);
    setSheepToCows(sheepToCows);
  };
  const removeCow = (index, num) => {
    cows.splice(index, 1);
    cowsToSheep.push(num);
    setCowsToSheep(cowsToSheep);
  };
  const unmoveSheep = (index, num) => {
    sheepToCows.splice(index, 1)
    sheep.push(num)
    setSheep(sheep)
  };
  const unmoveCow = (index, num) => {
    cowsToSheep.splice(index, 1)
    cows.push(num)
    setCows(cows)
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
            <Square key={i} num={cow} index={i} remove={removeCow} />
          ))}
          {sheepToCows.length > 0 &&
            sheepToCows.map((shee, i) => <Circle key={i} num={shee} index={i} remove={unmoveSheep} />)}
        </div>
      </div>
      <div className="rightSide">
        <p className="mainTxt">SHEEP</p>
        <div className="sheepEnclosure">
          {sheep.map((shee, i) => (
            <Circle key={i} num={shee} index={i} remove={removeSheep} />
          ))}
          {cowsToSheep.length > 0 &&
            cowsToSheep.map((cow, i) => <Square key={i} num={cow} index={i} remove={unmoveCow} />)}
        </div>
      </div>
    </div>
  );
};

export default Farm;
