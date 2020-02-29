import React, { Component } from 'react'
import Sun from './Sun';
import Earth from './Earth';
import Mars from './Mars';

export default class Space extends Component {
    state={
        time: "",
        distance: "",
    }
    render() {
        return (
            <div>
                <Sun />
                <Earth />
                <Mars />

            </div>
        )
    }
}
