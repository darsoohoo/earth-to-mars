import React, { Fragment } from 'react';
import Earth from './Earth';

const Sun = () => {
    const imgStyle = {
        height: "350px",
        weight: "350px",
        borderRadius: "50%",
        float:"left"
    }
    const sunPic = require('./../images/sun.gif')
    return (
           <div className="col s2">
                <img style={imgStyle} src={sunPic}/>
           </div>
    );
}

export default Sun;
