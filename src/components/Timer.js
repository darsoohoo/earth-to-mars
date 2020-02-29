import React, { Component } from 'react'

const Timer = props => {

    const {secondsLeft, secondsPast, milesLeft, milesPast} = props;
    return (
        <div>
            <h5>Seconds Left: {secondsLeft}</h5>
            <h5>Seconds Past: {secondsPast}</h5>
            <h5>Miles Left: {milesLeft}</h5>
            <h5>Miles Past: {milesPast}</h5>
        </div>
    )
}

export default Timer