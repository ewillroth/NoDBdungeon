import React, { Component } from 'react';
import './TitleBook.css';

//this component is rendered in the body

class TitleBook extends Component {
	constructor(props){
		super(props)
		this.state={
			monsters: this.props.monsters,
			pagenumber: 0
		}
	}

    render() {
		let [display] = this.props.monsters.map(monster=>
		<div key={monster.secretnumber}className="monsterbox">
			<h3>{monster.name}</h3>
			<p>HP: {monster.hit_points}</p>
			<p>Strength: {monster.strength}</p>
		</div>
		)
		let pagenumber=this.state.pagenumber
        return (
            <div className="TitleBook">
                <h2>Monster Directory</h2>
				{display[{pagenumber}]}
            </div>
        );
    }
}

export default TitleBook;
