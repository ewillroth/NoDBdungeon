import React, { Component } from 'react';
import './Header.css';
import NewGame from '../NewGame/NewGame';
import TitleButton from '../TitleButton/TitleButton';

const Header = (props) => {
	return (
		<div className="Header">
			<TitleButton titleBook={props.titleBook}/>
			<NewGame newGame={props.newGame}/>
		</div>
	);
}

export default Header;
