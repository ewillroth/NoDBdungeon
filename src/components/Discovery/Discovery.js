import React, {Component} from "react";
import axios from 'axios';
import "./Discovery.css";
import NextButton from '../NextButton/NextButton'
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


class Discovery extends Component{
	constructor(props){
		super(props)
		this.state={
			monster: []
		}
	}
	componentDidMount() {
		axios
			.get(`http://localhost:3030/api/monsters/${this.props.battles}`)
			.then(response => this.setState({ monster: response.data }))
			.catch(err => console.log(err))
	}

	render(){
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


		return (
			<div className="Discovery">
				<p>Whoa.. you've stumbled upon a vicious looking {this.state.monster.name}!</p>
				{art}
				<NextButton 
				className="NextButton"
				display='Battle!'
				clickNext={()=>this.props.clickNext(this.state.monster)}
				/>
			</div>
		);
	}
}

export default Discovery;
