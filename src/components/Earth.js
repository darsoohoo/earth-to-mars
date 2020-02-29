import React from 'react';

const Earth = () => {
    const imgStyle = {
        height: "180px",
        weight: "180px",
        borderRadius: "50%",
        float: "left",
        marginTop: "100px",
        marginLeft: "50px",
    }
    const earthPic = require('./../images/earth.gif')
    return (
            <img style={imgStyle} src={earthPic}/>
    );
}

export default Earth;
