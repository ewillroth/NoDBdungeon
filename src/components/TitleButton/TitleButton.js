import React, { Component } from "react";
import "./TitleButton.css";

class TitleButton extends Component {
    render() {
        return (
            <div className="TitleButton">
                <h3 onClick={this.props.titleBook}>NoDB Dungeon</h3>
            </div>
        );
    }
}

export default TitleButton;
