import React from "react";
import "./NewGame.css";

//this component is rendered in Header

const NewGame = (props) => {
	return (
		<div className="NewGame">
			<h3 onClick={props.newGame}>New Game</h3>
		</div>
	);
}

export default NewGame;
