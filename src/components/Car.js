import React from 'react';

const Car = () => {
    const imgStyle = {
        height: "90px",
        weight: "90px",
        marginTop: "150px"
    }
    const carPic = require('./../images/car.png')
    return (
        <div>
            <img style={imgStyle} src={carPic}/>
        </div>
    );
}

export default Car;
