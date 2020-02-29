import React, { Fragment } from 'react';
import Earth from './Earth';

const Sun = () => {
    const imgStyle = {
        height: "370px",
        weight: "370px",
        borderRadius: "50%",
        float:"left"
    }
    const sunPic = require('./../images/sun.gif')
    return (
            <img style={imgStyle} src={sunPic}/>
    );
}

export default Sun;
