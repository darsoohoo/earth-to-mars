import React from 'react'
import Sun from './Sun';
import Earth from './Earth';
import Car from './Car';
import Mars from './Mars';
import Timer from './Timer';

const Space = props => {

        const spaceStyle = {
            backGroundColor: "282c34"
        }
        return (
            <div style={spaceStyle} className="space">
                <Timer 
                    secondsLeft={props.secondsLeft}
                    secondsPast={props.secondsPast}
                    minutes={props.minutes}
                    hours={props.hours}
                    totalMiles={props.totalMiles}
                    milesLeft={props.milesLeft}
                    milesPast={props.milesPast}
                />
                <Sun />
                <Earth  />
                <Car />
                <Mars />
            </div>
        )
    
}

export default Space