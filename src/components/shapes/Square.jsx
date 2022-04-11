import React from 'react';
import './shapes.css'

const Square = (props) => {
    return (
        <div>
            <div className='square'>{props.num}</div>
        </div>
    );
}

export default Square;
