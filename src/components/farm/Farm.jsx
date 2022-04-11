import React, { useState } from 'react';
import "./farm.css";
import Square from '../shapes/Square'
import Circle from '../shapes/Circle'


const Farm = () => {

  function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const [cows, setCows] = useState([])
  const [sheep, setSheep] = useState([])


const fillAnimals = () => {

  const startingCows = rndNum(5,20)
  const startingSheep = rndNum(5,20)

    for (let i = 0; i < startingCows; i++) {
      cows.push('C00'+rndNum(10000,99999))
    }

      for (let i = 0; i < startingSheep; i++) {
        setSheep(sheep.push('S00'+rndNum(10000,99999)))
    }
    console.log(sheep)
    console.log(cows)
}





  return (
    <div>
      <div className="announcer">
        <p>FARM</p>
        <button className="eBtn" onClick={fillAnimals}>TO ENCLOSURE</button>
      </div>
      <div className="leftSide">
        <p className="mainTxt">COWS</p>
        <div className='cowEnclosure'>
          {cows.length > 1 && cows.map((cow,i) => <Square
            key={i}
            num={cow}
          />)}
          {console.log('cows', cows)}
        </div>
      </div>
      <div className="rightSide">
        <p className="mainTxt">SHEEP</p>
        <div className='sheepEnclosure'>
        {sheep.length > 1 && sheep.map((shee,i) => <Circle
            key={i}
            num={shee}
          />)}
        </div>
      </div>
    </div>
  );
};

export default Farm;
