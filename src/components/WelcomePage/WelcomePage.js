import React from 'react';
import './WelcomePage.css';
import logo from '../../art/logo.jpeg'

const WelcomePage = (props) =>{

		return <div className="WelcomePage">
				<h1 className="title">NoDB Dungeon</h1>
				<img src={logo} alt="dragon and barbarian"></img>
				<p className="about">
					NoDB Dungeon is a simple dungeon crawl game that uses the D&D 5th
					Edition API
				</p>
				<p className="about">
					Click 
					<span onClick={props.newGame}> New Game </span> to begin.
				</p>
			</div>;
}

export default WelcomePage;
