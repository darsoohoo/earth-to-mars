import React, { Component } from 'react'
import Sun from './Sun';
import Earth from './Earth';
import Car from './Car';
import Mars from './Mars';

export default class Space extends Component {

    render() {
        const borderStyle = {
            border: "solid black"
        }
        return (
            <div style={borderStyle} className="space"  >
                <Sun />
                <Earth  />
                <Car />
                <Mars />
            </div>
        )
    }
}
