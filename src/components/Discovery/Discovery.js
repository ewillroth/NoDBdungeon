import React, {Component} from "react";
import "./Discovery.css";
import NextButton from '../NextButton/NextButton';
import axios from 'axios'

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
		return (
			<div className="Discovery">
				<p>Whoa.. you've stumbled upon a vicious looking {this.state.monster.name}!</p>
				<img src="#" alt="monster"></img>
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
