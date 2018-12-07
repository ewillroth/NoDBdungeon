import React, { Component } from 'react';
import './GetMonster.css';
import Discovery from '../Discovery/Discovery';
import Battle from '../Battle/Battle';
import Victory from '../Victory/Victory';
import Defeat from '../Defeat/Defeat';

class GetMonster extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="GetMonster">
                <h2>GetMonster</h2>
                <Discovery/>
                <Battle/>
                <Victory/>
                <Defeat/>
            </div>
        );
    }
}

export default GetMonster;
