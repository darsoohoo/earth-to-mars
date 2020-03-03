import React from 'react';

const Earth = () => {
    const imgStyle = {
        height: "160px",
        weight: "160px",
        borderRadius: "50%",
        float: "right",
        marginTop: "100px",
        marginLeft: "60px"
    }
    const earthPic = require('./../images/earth.gif')
    return (
            <div className="col s2">
                <img style={imgStyle} src={earthPic}/>
            </div>
    );
}

export default Earth;
