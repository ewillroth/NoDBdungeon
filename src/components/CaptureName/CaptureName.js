import React, { Component } from 'react';
import './CaptureName.css';
import wizard from "../../art/wizard.jpeg";

class CaptureName extends Component {

    render() {
        return (
            <div className="CaptureName">
				<p>"Prepare yourself to embark on a most noble quest. Enter the dungeon and retrieve the Tome of Ultimate Coding Knowledge."		</p>
				<img src={wizard} alt="wizard"></img>
                <h4>What is your name?</h4>
				<input type="text" 
				name="name" 
				value={this.props.name} 
				onChange={this.props.onChange}>
				</input>
            </div>
        );
    }
}

export default CaptureName;
