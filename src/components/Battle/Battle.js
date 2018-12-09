import React, { Component } from "react";
import "./Battle.css";
import axios from 'axios';

class Battle extends Component {
	constructor(props){
		super(props)
		this.state={
			monster: this.props.monster,
			character: {},
			xp: 0,
			monsterxp: this.props.monster.hit_points
		}
		this.attack=this.attack.bind(this)
		this.runAway=this.runAway.bind(this)
	}

	//retrieves character from server, assigns it to state, and pushes it to parent state
	componentDidMount() {
		axios
			.get(`http://localhost:3030/api/character`)
			.then(response => this.setState({ character: response.data[0] }))
			.then(()=>this.props.pushCharacter(this.state.character))
			.catch(err => console.log(err));
	}
	//updates character stats on server after they change in state and updates character on parent
	componentDidUpdate(prevProps,prevState){
		if(this.state.character!==prevState.character){
			axios
			.put('http://localhost:3030/api/character', this.state.character)
			.then(response=>console.log("Character updated"))
			.then(() => this.props.pushCharacter(this.state.character))
			.catch(err=>console.log(err))
		}
	}
	//updates character hp and monster hp in state 
	attack(){
		let newCharHP = this.state.character.currenthp-this.state.monster.strength
		let newMonHP = this.state.monster.hit_points - this.state.character.str
		this.setState({
			monster: {...this.state.monster, hit_points: newMonHP},
			character: {...this.state.character, currenthp: newCharHP}
		})
		if (newCharHP < 1) { this.props.defeat('battle') }
		else if (newMonHP < 1) { this.props.victory('battle', this.state.monsterxp) }
	}

	runAway(){
		if(this.state.character.dex>(this.state.monster.dexterity/3)){
			this.props.victory('run')
		}
		else{
			this.props.defeat('run')
		}
	}

	render() {
			return <div className="Battle">
					<div className="monsterbox">
						<p>HP:{this.state.monster ? this.state.monster.hit_points : null}</p>
						<img src="#" alt="monster" />
						<p>{this.state.monster ? this.state.monster.name : null}</p>
					</div>
					<div className="playerbox">
						<div className="stats">
							<p>{this.state.character.name}</p>
							<p>Level: {this.state.character.level}</p>
							<p>HP: {this.state.character.currenthp} / {this.state.character.maxhp}</p>
						</div>
						<div className="actions">
							<button className="NextButton" onClick={this.attack} >Attack!</button>
							<b></b>
							<button className="NextButton" onClick={this.runAway}>Run Away</button>
						</div>
					</div>
				</div>;
	}
}

export default Battle;
