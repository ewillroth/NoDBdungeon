import React, { Component } from "react";
import "./Battle.css";
import axios from 'axios';
import flyingsnake from "../../art/flyingsnake.jpeg";
import bat from "../../art/bat.jpeg";
import scorpion from "../../art/scorpion.jpeg";
import crab from "../../art/crab.jpeg";
import goat from "../../art/goat.jpeg";
import giantrat from "../../art/giantrat.jpeg";
import skeleton from "../../art/skeleton.jpeg";
import crocodile from "../../art/crocodile.jpeg";
import swarmofwasps from "../../art/swarmofwasps.jpeg";
import ghoul from "../../art/ghoul.jpeg";
import lion from "../../art/lion.jpeg";
import mummy from "../../art/mummy.jpeg";
import ogre from "../../art/ogre.jpeg";
import youngreddragon from "../../art/youngreddragon.jpeg";


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
			.get(`api/character`)
			.then(response => this.setState({ character: response.data[0] }))
			.then(()=>this.props.pushCharacter(this.state.character))
			.catch(err => console.log(err));
	}
	//updates character stats on server after they change in state and updates character on parent
	componentDidUpdate(prevProps,prevState){
		if(this.state.character!==prevState.character){
			axios
			.put('api/character', this.state.character)
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
		const art = this.state.monster.name === 'Flying Snake' 
		? <img src={flyingsnake} alt="Flying Snake"></img>
		: this.state.monster.name === 'Bat' 
		? <img src={bat} alt="Bat"></img> 
		: this.state.monster.name === 'Scorpion'
		? <img src={scorpion} alt="Scorpion"></img>
		: this.state.monster.name === 'Crab'
		? <img src={crab} alt="Crab"></img>
		: this.state.monster.name === 'Goat'
		? <img src={goat} alt="Goat"></img>
		: this.state.monster.name === 'Giant Rat'
		? <img src={giantrat} alt="Giant Rat"></img>
		: this.state.monster.name === 'Skeleton'
		? <img src={skeleton} alt="Skeleton"></img>
		: this.state.monster.name === 'Crocodile'
		? <img src={crocodile} alt="Crocodile"></img>
		: this.state.monster.name === 'Swarm of Wasps'
		? <img src={swarmofwasps} alt="Swarm of Wasps"></img>
		: this.state.monster.name === 'Ghoul'
		? <img src={ghoul} alt="Ghoul"></img>
		: this.state.monster.name === 'Lion'
		? <img src={lion} alt="Lion"></img>
		: this.state.monster.name === 'Mummy'
		? <img src={mummy} alt="Mummy"></img>
		: this.state.monster.name === 'Ogre'
		? <img src={ogre} alt="Ogre"></img>
		: this.state.monster.name === 'Young Red Dragon'
		? <img src={youngreddragon} alt="Young Red Dragon"></img> : null;

			return <div className="Battle">
					<div className="monsterbox">
						<p>HP:{this.state.monster ? this.state.monster.hit_points : null}</p>
						{art}
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
