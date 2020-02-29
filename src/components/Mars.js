import React from 'react';

const Mars = () => {
    const imgStyle = {
        height: "100px",
        weight: "100px",
        borderRadius: "50%",
        float: "right"
    }
    const marsPic = require('./../images/mars.gif')
    return (
 
            <img style={imgStyle} src={marsPic}/>
  
    );
}

export default Mars;
