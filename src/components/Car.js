import React from 'react';

const Car = ({ percentComplete }) => {

    console.log("percent complete", percentComplete)
    
    const imgStyle = {
        height: "90px",
        weight: "90px",
        marginLeft: `${percentComplete}%`,
    }
    const percentageStyle = {
        height: "90px",
        weight: "90px",
        marginTop: "60px",
        marginBottom: "0px",
        marginLeft: `${percentComplete}%`,
        paddingTop: "75px",
        paddingLeft: "55px"
    }
    const divStyle = {
        padding: "0",
        marginTop: "0"
    }

    const carPic = require('./../images/car.png')
    const corgiPic = require('./../images/corgi.png')
    return (
        <div style={divStyle} className="col s6">
            <h5 style={percentageStyle}>{parseInt(percentComplete, 10)}%</h5>
            {percentComplete > 80 ? <img style={imgStyle} src={corgiPic}/> : <img style={imgStyle} src={carPic}/> }
            
        </div>
    );
}

export default Car;
