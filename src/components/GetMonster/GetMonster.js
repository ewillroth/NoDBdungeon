import React, { Component } from 'react';
import './GetMonster.css';
import Discovery from '../Discovery/Discovery';
import Battle from '../Battle/Battle';
import Victory from '../Victory/Victory';
import Defeat from '../Defeat/Defeat';
import LevelUp from '../LevelUp/LevelUp';
import CharSheet from '../CharSheet/CharSheet';
import axios from 'axios';
import tome from '../../art/tome.jpeg';
import emptytome from '../../art/emptytome.jpeg';
import wizard from "../../art/wizard.jpeg";

class GetMonster extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pagenumber: 0,
			battles: 0,
			monster: [],
			message: "",
			xp: 0,
			levelup: false,
			character: {},
			xprequired: 5
		};
		this.clickNext = this.clickNext.bind(this);
		this.victory = this.victory.bind(this);
		this.defeat = this.defeat.bind(this);
		this.continue = this.continue.bind(this);
		this.pushCharacter = this.pushCharacter.bind(this);
		this.levelup = this.levelup.bind(this);
		this.openTome = this.openTome.bind(this);
		this.throwAwayTome = this.throwAwayTome.bind(this);
		}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.character !== prevState.character) {
			axios
				.put("api/character", this.state.character)
				.then(() => this.props.pushCharacter(this.state.character))
				.catch(err => console.log(err));
		}
	}
	//	changes display from discovery to battle and sets state to the monster retrieved from the server in the Discovery Component
	clickNext(monster) {
		this.setState({
			pagenumber: this.state.pagenumber + 1,
			monster
		});
	}
	//allows children to update character on state
	pushCharacter(character) {
		this.setState({
			character
		});
	}

	openTome(){
		this.setState({
			pagenumber: 7,
		})
	}

	throwAwayTome(){
		this.setState({
			pagenumber: 8,
		})
	}

	//gives the battle component a way to trigger the defeat page
	defeat(message) {
		this.setState({
			pagenumber: 3,
			message
		});
	}
	//gives the battle component a way to trigger the victory page
	victory(message, xp) {
		this.setState({
			pagenumber: 2,
			message,
			xp: this.state.xp + xp
		});
	}
	//if levelup=true, show levelup, else show discovery
	continue(xp) {
		if(this.state.battles===13) {
			this.setState({
				pagenumber: 6,
			})
		}
		else if (xp >= this.state.xprequired) {
			this.setState({
				pagenumber: 4,
				battles: this.state.battles + 1,
				xprequired: this.state.xprequired + (this.state.xprequired-3),
				xp: this.state.xp % this.state.xprequired
			});
		} else {
			this.setState({
				pagenumber: 0,
				battles: this.state.battles + 1
			});
		}
	}
	//sets state to show levelup screen
	levelup() {
		this.setState({
			pagenumber: 5
		});
	}

	//Discovery>Battle>Defeat or
	//Discovery>Battle>Victory>Discovery or
	//Discovery>Battle>Victory>Levelup>CharacterSheet>Discovery
	//Discovery>Battle>Victory>FinalVictory
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
						continue={this.continue}
					/>
				</div>
			);
		} else if (this.state.pagenumber === 3) {
			display = (
				<div className="GetMonster">
					<Defeat message={this.state.message} monster={this.state.monster} />
				</div>
			);
		} else if (this.state.pagenumber === 4) {
			display = (
				<div className="GetMonster">
					<LevelUp pushCharacter={this.pushCharacter} levelup={this.levelup} />
				</div>
			);
		} else if (this.state.pagenumber === 5) {
			display = (
				<div className="GetMonster">
					<CharSheet
						character={this.state.character}
						continue={this.continue}
					/>
				</div>
			);
		} else if (this.state.pagenumber === 6) {
			display = (
				<div>
					<img src={tome} alt="tome of ultimate coding knowledge"></img>
					<p>Congratulations, you have found the tome of ultimate coding knowledge.</p>
					<button onClick={this.openTome} className="NextButton">Open the tome></button>
				</div>
			)
		} else if (this.state.pagenumber===7) {
			display = (
				<div>
					<img src={emptytome} alt='empty book'></img>
					<p>This tome is empty! What a rip off!</p>
					<button onClick={this.throwAwayTome} className="NextButton">Throw away the tome</button>
				</div>
			)
		}
		else if (this.state.pagenumber===8) {
			display = (
				<div>
					<img src={wizard} alt="wizard"></img>
					<p>"There is no such thing as ultimate coding knowledge. Continue learning."</p>
				</div>
			)
		}

		return <>{display}</>;
	}
}

export default GetMonster;
