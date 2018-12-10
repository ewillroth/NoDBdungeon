import React from 'react';
import './Body.css';
import WelcomePage from '../WelcomePage/WelcomePage';
import CreateCharacter from '../CreateCharacter/CreateCharacter';
import GetMonster from '../GetMonster/GetMonster';
import TitleBook from '../TitleBook/TitleBook';

const Body = props => {
	let display = '';
	if (props.pagetracker===0) 
		{display = <WelcomePage 
		newGame={props.newGame}/>}
	else if(props.pagetracker===1)
		{display = <CreateCharacter 
		classname={props.classname} 
		nextClass={props.nextClass} 
		prevClass={props.prevClass} 
		class={props.class} 
		name={props.name} 
		onChange={props.onChange} 
		clickEnter={props.clickEnter}
		maxhp={props.maxhp}
		str={props.str}
		dex={props.dex}
		int={props.int}
		con={props.con}
		level={props.level}
		/>}
	else if(props.pagetracker===2)
		{display = <GetMonster 
		monsters={props.monsters}
		/>}
	else if(props.pagetracker===3)
		{display = <TitleBook monsters={props.monsters}/>}

	return (
		<div className="Body">
			{display}
		</div>
	);
}

export default Body;
