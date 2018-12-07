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
			stats: {
				maxhp: 40,
				currenthp: 40,
				str: 3,
				dex: 2,
				int: 1,
				con: 4,
			},
			monsters: []			
		}
		this.clickEnter = this.clickEnter.bind(this)
		this.newGame = this.newGame.bind(this)
		this.titleBook = this.titleBook.bind(this)
		this.onChange = this.onChange.bind(this)
		this.nextClass = this.nextClass.bind(this)
		this.prevClass = this.prevClass.bind(this)
	}

	componentDidMount() {
		Axios
			.get('http://localhost:3030/api/monsters')
			.then(response => this.setState({ monsters: response.data }))
			.catch(err => console.log(err))
	}

	componentDidUpdate(prevProps,prevState){
		if(this.state.class!==prevState.class){
			if (this.state.class === 0) {
				this.setState({
					classname: 'Warrior',
					stats: {
						maxhp: 40,
						currenthp: 40,
						str: 3,
						dex: 2,
						int: 1,
						con: 4,
					}
				})
			}
			else if (this.state.class === 1) {
				this.setState({
					classname: 'Rogue',
					stats: {
						maxhp: 20,
						currenthp: 20,
						str: 2,
						dex: 4,
						int: 2,
						con: 2,
					}
				})
			}
			else if (this.state.class === 2) {
				this.setState({
					classname: 'Wizard',
					stats: {
						maxhp: 10,
						currenthp: 10,
						str: 2,
						dex: 1,
						int: 4,
						con: 1,
					}
				})
			}
			else if (this.state.class === 3) {
				this.setState({
					classname: 'Barbarian',
					stats: {
						maxhp: 30,
						currenthp: 30,
						str: 4,
						dex: 2,
						int: 1,
						con: 3,
					}
				})
			}
		}
	}

	titleBook(){
		this.setState({
			pagetracker: 3,
		})
	}
	newGame(){
		this.setState({
			pagetracker: 1,
			class: 0,
			classname: 'Warrior',
			stats: {
				maxhp: 40,
				currenthp: 40,
				str: 3,
				dex: 2,
				int: 1,
				con: 4,
			}
		})
		Axios.delete('http://localhost:3030/api/character').then(response=>console.log(response.data)).catch(err=>console.log(err))
	}

	onChange(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	clickEnter(){
		let character = { name: this.state.name, class: this.state.classname, stats: this.state.stats}
		this.setState({
			pagetracker: 2,
			name: '',
			classname: 'Warrior',
			class: 0,
			stats: {},
		})
		Axios
		.post('http://localhost:3030/api/character/', character)
		.then(response => console.log(response.data))
		.catch(err=>console.log(err))
	}

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
				monsters={this.state.monsters} 
				titleBook={this.titleBook}
				/>
				<Body 
				monsters={this.state.monsters} 
				classname={this.state.classname} 
				class={this.state.class} 
				nextClass={this.nextClass} 
				prevClass={this.prevClass} 
				name={this.state.name} 
				onChange={this.onChange} 
				pagetracker={this.state.pagetracker} 
				clickEnter={this.clickEnter}
				/>
			</div>
		);
	}
}

export default App;
