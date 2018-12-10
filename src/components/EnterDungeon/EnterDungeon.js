import React from 'react';
import './EnterDungeon.css';
import entrancepic from '../../art/entrance.jpeg'

const EnterDungeon = (props) => {
	return <div className="EnterDungeon">

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
		<img src={entrancepic} alt="entrance pic" />
		</div>;
}

export default EnterDungeon;
