import React from 'react';

const Sun = () => {
    const imgStyle = {
        height: "400px",
        weight: "400px",
        borderRadius: "50%"
    }
    const sunPic = require('./../images/sun.gif')
    return (
        <div>
            <img style={imgStyle} src={sunPic}/>
        </div>
    );
}

export default Sun;
