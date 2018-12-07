import React, { Component } from 'react';
import './CaptureName.css';

class CaptureName extends Component {

    render() {
        return (
            <div className="CaptureName">
                <h4>What is your name?</h4>
				<input type="text" name="name" value={this.props.name} onChange={this.props.onChange}></input>
            </div>
        );
    }
}

export default CaptureName;
