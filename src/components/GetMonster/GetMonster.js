import React, { Component } from 'react';
import './GetMonster.css';
import Discovery from '../Discovery/Discovery';
import Battle from '../Battle/Battle';
import Victory from '../Victory/Victory';
import Defeat from '../Defeat/Defeat';
import LevelUp from '../LevelUp/LevelUp';
import CharSheet from '../CharSheet/CharSheet';
import axios from 'axios';

class GetMonster extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pagenumber: 0,
			battles: 0,
			monster: [],
			message: '',
			xp: 0,
			levelup: false,
			character: {},
			xprequired: 5,
		};
		this.clickNext = this.clickNext.bind(this);
		this.victory = this.victory.bind(this);
		this.defeat = this.defeat.bind(this);
		this.continue = this.continue.bind(this);
		this.pushCharacter = this.pushCharacter.bind(this);
		this.levelup=this.levelup.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.character !== prevState.character) {
			axios
				.put('http://localhost:3030/api/character', this.state.character)
				.then(response => console.log("Character updated"))
				.then(() => this.props.pushCharacter(this.state.character))
				.catch(err => console.log(err))
		}
	}
	//	changes display from discovery to battle and sets state to the monster retrieved from the server in the Discovery Component
	clickNext(monster) {
		this.setState({
			pagenumber: this.state.pagenumber + 1,
			monster
		});
	}

	pushCharacter(character){
		this.setState({
			character
		})
	}

	//gives the battle component a way to trigger the defeat page
	defeat(message){
		this.setState({
			pagenumber: 3,
			message
		})
	}
	//gives the battle component a way to trigger the victory page
	victory(message,xp){
		this.setState({
			pagenumber: 2,
			message,
			xp: this.state.xp + xp
		})
	}

	continue(xp){
		if(xp>=this.state.xprequired){
			this.setState({
				pagenumber: 4,
				battles:this.state.battles +1,
				xprequired: this.state.xprequired*2,
				xp: this.state.xp%this.state.xprequired
			})
		}
		else{
		this.setState({
			pagenumber: 0,
			battles: this.state.battles +1,
		})
		}
	}

	levelup(){
		this.setState({
			pagenumber: 5,
		})
	}

	render() {
		let display = "";
		if (this.state.pagenumber === 0) {
			display = (
				<div className="GetMonster">
					<Discovery clickNext={this.clickNext} battles={this.state.battles} />
				</div>
			);
		} else if (this.state.pagenumber === 1) {
			display = (
				<div className="GetMonster">
					<Battle 
					pushCharacter={this.pushCharacter}
					victory={this.victory}
					defeat={this.defeat}
					monster={this.state.monster} 
					/>
				</div>
			);
		} else if (this.state.pagenumber === 2) {
			display = (
				<div className="GetMonster">
					<Victory 
					xp={this.state.xp}
					levelup={this.state.levelup}
					message={this.state.message}
					monster={this.state.monster}
					continue={this.continue}/>
				</div>
			);
		} else if (this.state.pagenumber === 3) {
			display = (
				<div className="GetMonster">
					<Defeat 
					message={this.state.message}
					monster={this.state.monster}/>
				</div>
			);
		} else if (this.state.pagenumber === 4) {
			display = (
				<div className="GetMonster">
					<LevelUp
					pushCharacter={this.pushCharacter}
					levelup={this.levelup}/>
				</div>
			);
		} else if (this.state.pagenumber === 5) {
			display = (
				<div className="GetMonster">
					<CharSheet 
					character={this.state.character}
					continue={this.continue}/>
				</div>
			);
		}

		return <>{display}</>;
	}
}

export default GetMonster;
