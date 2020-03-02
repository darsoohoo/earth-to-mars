import React from 'react'
import PropTypes from 'prop-types';

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

Timer.defaultProps = {
    secondsLeft: 0,
    secondsPast: 0,
    milesLeft: 0,
    milesPast: 0
}

Timer.propTypes = {
    secondsLeft: PropTypes.number.isRequired,
    secondsPast: PropTypes.number.isRequired,
    milesLeft: PropTypes.number.isRequired,
    milesPast: PropTypes.number.isRequired
}

export default Timer