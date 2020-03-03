import React from 'react'
import Sun from './Sun';
import Earth from './Earth';
import Car from './Car';
import Mars from './Mars';
import Timer from './Timer';

const Space = props => {
    const divStyle = {
        marginTop: "70px"
    }

        return (
            <div style={divStyle} className="row">
                <Sun />
                <Earth  />
                <Car 
                    percentComplete={props.percentComplete}
                />
                <Mars />
            </div>
        )
    
}

export default Space