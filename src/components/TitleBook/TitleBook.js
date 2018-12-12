import React, { Component } from 'react';
import './TitleBook.css';
import axios from 'axios';

//this component is rendered in the body

class TitleBook extends Component {
	constructor(props){
		super(props)
		this.state={
			monsters: [],
			pagenumber: 0,
			searchvalue: '',
			monsternumber: '',
		}
		this.onChange=this.onChange.bind(this)
	}
	
	componentDidMount(){
		axios
		.get('api/monsters')
		.then(response => this.setState({
			monsters:response.data
		}))
		.catch(err=>console.log(err))
	}

	onChange(e) {
		let monstertofind = this.state.monsters.find((monster)=>{
			if (e.target.value&&monster['name'].includes(e.target.value)){
				return monster
			}
			else {
				return null;
			}
		});
		if (monstertofind){
			this.setState({
				monsters: [monstertofind]
			})
		}
		else {
			axios
				.get('http://localhost:3030/api/monsters')
				.then(response => {
					this.setState({
						monsters: response.data
					})
				}).catch(err => console.log(err))
		}
	}

    render() {
		let display = this.state.monsters.map(monster=>
		<div key={monster.secretnumber}className="monsterbox">
			<h3>{monster.name}</h3>
			<p>HP: {monster.hit_points}</p>
			<p>Strength: {monster.strength}</p>
			<p>Dexterity: {monster.dexterity}</p>
		</div>
		)
		return (
            <div className="TitleBook">
                <h2>Monster Directory</h2>
				<input className="searchBox" type="text" 
				onChange={this.onChange}></input>
				{display}
            </div>
        );
    }
}

export default TitleBook;
