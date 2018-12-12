import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Axios from 'axios';

class App extends Component {
	constructor(props){
		super(props)
		this.state={
			pagetracker: 0,
			name: '',
			class: 0,
			classname: 'Warrior',
			maxhp: 50,
			currenthp: 50,
			str: 4,
			dex: 2,
			int: 2,
			con: 5,
			monsters: [],
			character: [],
			level: 1
		}
		this.clickEnter = this.clickEnter.bind(this)
		this.newGame = this.newGame.bind(this)
		this.displayDirectory = this.displayDirectory.bind(this)
		this.onChange = this.onChange.bind(this)
		this.nextClass = this.nextClass.bind(this)
		this.prevClass = this.prevClass.bind(this)
	}

//loads the monsters from the server into the monsters array when component mounts

	componentDidMount() {
		Axios
			.get('api/monsters')
			.then(response => this.setState({ monsters: response.data }))
			.catch(err => console.log(err))
	}

//updates stats on state whenever the class number changes on state- used in ChooseClass

	componentDidUpdate(prevProps,prevState){
		if(this.state.class!==prevState.class){
			if (this.state.class === 0) {
				this.setState({
					classname: 'Warrior',
					maxhp: 50,
					currenthp: 50,
					str: 4,
					dex: 2,
					int: 2,
					con: 5,
				})
			}
			else if (this.state.class === 1) {
				this.setState({
					classname: 'Rogue',
					maxhp: 30,
					currenthp: 30,
					str: 4,
					dex: 6,
					int: 2,
					con: 3,
				})
			}
			else if (this.state.class === 2) {
				this.setState({
					classname: 'Wizard',
					maxhp: 30,
					currenthp: 30,
					str: 2,
					dex: 1,
					int: 5,
					con: 3,
				})
			}
			else if (this.state.class === 3) {
				this.setState({
					classname: 'Barbarian',
					maxhp: 40,
					currenthp: 40,
					str: 7,
					dex: 2,
					int: 1,
					con: 4,
				})
			}
		}
	}

	displayDirectory(){
		this.setState({
			pagetracker: 3,
		})
	}

//sets page to CreateCharacter,resets state to the starting state for character selction, and deletes the previous character from the server

	newGame(){
		this.setState({
			pagetracker: 1,
			name: '',
			class: 0,
			classname: 'Warrior',
			maxhp: 40,
			currenthp: 40,
			str: 3,
			dex: 2,
			int: 1,
			con: 4,
			level: 1
		})
		Axios.delete('api/character').then().catch(err=>console.log(err))
	}

//controls input form for character creation

	onChange(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}

//pushes character information to a single character array, pushes that array to the server, and sets pagetracker to show battle information

	clickEnter(){
		let character = { name: this.state.name, class: this.state.classname, maxhp: this.state.maxhp, currenthp: this.state.currenthp, str: this.state.str, dex: this.state.dex, int: this.state.int, con:this.state.con, level: this.state.level}
		this.setState({
			pagetracker: 2,
		})
		Axios
		.post('api/character/', character)
		.then(response => this.setState({character: response.data[0]}))
		.catch(err=>console.log(err))
	}

//cycles between classes on the class selection page
	nextClass() {
		if (this.state.class !== 3) {
			this.setState({
				class: this.state.class + 1
			})
		}
		else {
			this.setState({
				class: 0
			})
		}
	}
	prevClass() {
		if (this.state.class !== 0) {
			this.setState({
				class: this.state.class - 1
			})
		}
		else {
			this.setState({
				class: 3
			})
		}
	}

	render() {
		return (
			<div className="App">
				<Header 
				pagetracker={this.state.pagetracker} 
				newGame={this.newGame} 
				displayDirectory={this.displayDirectory}
				/>
				<Body 
				newGame={this.newGame}
				monsters={this.state.monsters} 
				classname={this.state.classname} 
				class={this.state.class} 
				nextClass={this.nextClass} 
				prevClass={this.prevClass} 
				name={this.state.name} 
				onChange={this.onChange} 
				pagetracker={this.state.pagetracker} 
				clickEnter={this.clickEnter}
				character={this.state.character}
				maxhp={this.state.maxhp}
				str={this.state.str}
				dex={this.state.dex}
				int={this.state.int}
				con={this.state.con}
				level={this.state.level}
				/>
			</div>
		);
	}
}

export default App;
