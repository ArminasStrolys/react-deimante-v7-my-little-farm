import React, { useState } from 'react';
import "./farm.css";

const Farm = () => {

    const [cows, setCows] = useState('')
    const [sheep, setSheep] = useState('')

  return (
    <div>
      <div className="announcer">
        <p>FARM</p>
        <button className="eBtn">TO ENCLOSURE</button>
      </div>
      <div className="leftSide">
        <p className="mainTxt">COWS</p>
      </div>
      <div className="rightSide">
        <p className="mainTxt">SHEEP</p>
      </div>
    </div>
  );
};

export default Farm;
