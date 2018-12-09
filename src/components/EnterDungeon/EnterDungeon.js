import React from 'react';
import './EnterDungeon.css';

const EnterDungeon = (props) => {
	return <div className="EnterDungeon">
			<img src="#" alt="entrance pic" />
			<div className="boxAround">
				<p>{props.name}</p>
				<p>Level {props.level} {props.classname}</p>
				<ul>
					<li>Hit points:{props.maxhp}</li>
					<li>Strength:{props.str}</li>
					<li>Dexterity:{props.dex}</li>
					<li>Intelligence:{props.int}</li>
					<li>Constitution:{props.con}</li>
				</ul>
			</div>
			<button className="NextButton" onClick={props.clickEnter}>Enter Dungeon!</button>
		</div>;
}

export default EnterDungeon;
