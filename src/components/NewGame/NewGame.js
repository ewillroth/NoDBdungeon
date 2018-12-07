import React, { Component } from "react";
import "./NewGame.css";
import { throws } from "assert";

const NewGame = (props) => {
	return (
		<div className="NewGame">
			<h3 onClick={props.newGame}>New Game</h3>
		</div>
	);
}

export default NewGame;
