import React, { Component } from 'react';
import './TitleBook.css';

//this component is rendered in the body

class TitleBook extends Component {
	constructor(props){
		super(props)
		this.state={
			monsters: this.props.monsters
		}
	}

    render() {
		let display = this.props.monsters.map(monster=>
		<div className="monsterbox">
			<h3>{monster.name}</h3>
			<h4>HP: {monster.hit_points}</h4>
		</div>
		)
        return (
            <div className="TitleBook">
                <h2>Monster Directory</h2>
				{display}
            </div>
        );
    }
}

export default TitleBook;
