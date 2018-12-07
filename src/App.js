import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import { throws } from 'assert';

class App extends Component {
	constructor(props){
		super(props)
		this.state={
			pagetracker: 0,
		}
		this.clickEnter = this.clickEnter.bind(this)
		this.newGame = this.newGame.bind(this)
		this.titleBook = this.titleBook.bind(this)
	}
	titleBook(){
		this.setState({
			pagetracker: 3,
		})
	}
	newGame(){
		this.setState({
			pagetracker: 1,
		})
	}

	clickEnter(){
		this.setState({
			pagetracker: 2
		})
	}

	render() {
		return (
			<div className="App">
				<Header newGame={this.newGame} titleBook={this.titleBook}/>
				<Body pagetracker={this.state.pagetracker} clickEnter={this.clickEnter}/>
			</div>
		);
	}
}

export default App;
