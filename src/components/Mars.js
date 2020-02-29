import React from 'react';

const Mars = () => {
    const imgStyle = {
        height: "100px",
        weight: "100px",
        borderRadius: "50%"

    }
    const marsPic = require('./../images/mars.gif')
    return (
        <div>
            <img style={imgStyle} src={marsPic}/>
        </div>
    );
}

export default Mars;
