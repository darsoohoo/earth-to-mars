import React from 'react';

const Mars = () => {
    const imgStyle = {
        height: "90px",
        weight: "90px",
        borderRadius: "50%",
        float: "left",
        marginTop: "150px",
        marginRight: "20px"
    }
    const marsPic = require('./../images/mars.gif')
    return (
        <div className="col s2">
            <img style={imgStyle} src={marsPic}/>
        </div>
        
  
    );
}

export default Mars;
