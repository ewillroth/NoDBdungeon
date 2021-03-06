import React from 'react';
import './Header.css';
import NewGame from '../NewGame/NewGame';
import TitleButton from '../TitleButton/TitleButton';

//this component is rendered in App

const Header = (props) => {
	if(props.pagetracker!==1){
	return (
		<div className="Header">
			<TitleButton 
			displayDirectory={props.displayDirectory}
			/>
			<NewGame 
			newGame={props.newGame}
			/>
		</div>
	);
	}
	else{
		return (
			<div className="Header">
				<TitleButton 
				displayDirectory={props.displayDirectory} 
				/>
			</div>
		)
	}
}

export default Header;
