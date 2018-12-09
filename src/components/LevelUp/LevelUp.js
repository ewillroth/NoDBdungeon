import React, {Component} from 'react';
import axios from 'axios'
import './LevelUp.css'

class LevelUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			character: {},
			points: 0,
			str: 0,
			dex: 0,
			int: 0,
			con: 0,
			startingStr: 0,
			startingDex: 0,
			startingInt: 0,
			startingCon: 0,
			currenthp: 0,
			maxhp: 0,
		};
		this.increaseCon = this.increaseCon.bind(this)
		this.increaseDex = this.increaseDex.bind(this)
		this.increaseInt = this.increaseInt.bind(this)
		this.increaseStr = this.increaseStr.bind(this)
		this.decreaseStr = this.decreaseStr.bind(this)
		this.decreaseDex = this.decreaseDex.bind(this)
		this.decreaseInt = this.decreaseInt.bind(this)
		this.decreaseCon = this.decreaseCon.bind(this)
	}

	componentDidMount() {
		axios
			.get("http://localhost:3030/api/character")
			.then(response =>
				this.setState({
					character: response.data[0],
					str: response.data[0].str,
					dex: response.data[0].dex,
					int: response.data[0].int,
					con: response.data[0].con,
					points: response.data[0].int,
					startingStr: response.data[0].str,
					startingDex: response.data[0].dex,
					startingInt: response.data[0].int,
					startingCon: response.data[0].con,
					currenthp: response.data[0].con*10,
					maxhp: response.data[0].con*10,
				})
			).catch(err => console.log(err));
	}

	//updates state.character whenever any stat updates
	componentDidUpdate(prevProps, prevState){
		if(this.state.str!==prevState.str || this.state.dex !== prevState.dex || this.state.int!==prevState.int || this.state.con !== prevState.con){
			this.setState({
				character: { ...this.state.character, str: this.state.str, int: this.state.int, con: this.state.con, dex: this.state.dex, currenthp: this.state.con * 10, maxhp: this.state.con * 10}
			})
		}
	}
//increase stats on state and decrease points to spend on state
	increaseStr(){
		if(this.state.points>0){
			this.setState({
				str: this.state.str + 1,
				points: this.state.points - 1
			})
		}
	}
	increaseDex(){
		if(this.state.points>0){
			this.setState({
				dex: this.state.dex + 1,
				points: this.state.points - 1
			})
		}
	}
	increaseInt(){
		if(this.state.points>0){
			this.setState({
				int: this.state.int + 1,
				points: this.state.points - 1
			})
		}
	}
	increaseCon() {
		if (this.state.points > 0) {
			this.setState({
				con: this.state.con + 1,
				points: this.state.points - 1,
				maxhp: this.state.maxhp + 10,
				currenthp: this.state.currenthp + 10
			})
		}
	}
//increase points to spend on state and decrease stats on state
	decreaseStr() {
		if (this.state.str > this.state.startingStr)
			this.setState({
				str: this.state.str - 1,
				points: this.state.points + 1
			})
	}
	decreaseDex() {
		if (this.state.dex > this.state.startingDex)
			this.setState({
				dex: this.state.dex - 1,
				points: this.state.points + 1
			})
	}
	decreaseInt() {
		if (this.state.int > this.state.startingInt)
			this.setState({
				int: this.state.int - 1,
				points: this.state.points + 1
			})
	}
	decreaseCon(){
		if(this.state.con>this.state.startingCon)
		this.setState({
			con: this.state.con - 1,
			points: this.state.points + 1,
			maxhp: this.state.maxhp - 10,
			currenthp: this.state.currenthp -10
		})
	}

	render() {
		return <div>
				<h3>Level Up</h3>
				<p>Points available: {this.state.points}</p>
				<ul>
					<li className="levelUpStat">
						<p>Strength:</p>
						<button 
						onClick={this.decreaseStr}>
						-</button>
						{this.state.str}
						<button 
						onClick={this.increaseStr}>
						+</button>
					</li>
					<li className="levelUpStat">
						<p>Dexterity:</p>
						<button 
						onClick={this.decreaseDex}>
						-</button>
						{this.state.dex}
						<button 
						onClick={this.increaseDex}>
						+</button>
					</li>
					<li className="levelUpStat">
						<p>Intelligence:</p>
						<button 
						onClick={this.decreaseInt}>
						-</button>
						{this.state.int}
						<button 
						onClick={this.increaseInt}>
						+</button>
					</li>
					<li className="levelUpStat">
						<p>Constitution:</p>
						<button 
						onClick={this.decreaseCon}>
						-</button>
						{this.state.con}
						<button 
						onClick={this.increaseCon}>
						+</button>
					</li>
				</ul>
				<button className="NextButton" onClick={() => {
						this.props.pushCharacter(this.state.character)
						this.props.levelup();
					}}>
					Continue...
				</button>
			</div>;
	}
}
export default LevelUp