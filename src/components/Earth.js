import React from 'react';

const Earth = () => {
    const imgStyle = {
        height: "150px",
        weight: "150px",
        borderRadius: "50%"

    }
    const earthPic = require('./../images/earth.gif')
    return (
        <div>
            <img style={imgStyle} src={earthPic}/>
        </div>
    );
}

export default Earth;
