import React, { Component } from 'react';
import './Body.css';
import WelcomePage from '../WelcomePage/WelcomePage';
import CreateCharacter from '../CreateCharacter/CreateCharacter';
import GetMonster from '../GetMonster/GetMonster';
import TitleBook from '../TitleBook/TitleBook';

class Body extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pagetracker: props.pagetracker,
		}
	}

	componentDidUpdate(prevProps, prevState){
		if(this.props.pagetracker!== prevProps.pagetracker){
			this.setState({
				pagetracker: this.props.pagetracker,
			})
		}
	}

	render() {
		let display = '';
		if (this.state.pagetracker===0) 
			{display = <WelcomePage />}
		else if(this.state.pagetracker===1)
			{display = <CreateCharacter 
			classname={this.props.classname} 
			nextClass={this.props.nextClass} 
			prevClass={this.props.prevClass} 
			class={this.props.class} 
			name={this.props.name} 
			onChange={this.props.onChange} 
			clickEnter={this.props.clickEnter}
			/>}
		else if(this.state.pagetracker===2)
			{display = <GetMonster />}
		else if(this.state.pagetracker===3)
			{display = <TitleBook monsters={this.props.monsters}/>}

		return (
			<div className="Body">
				{display}
			</div>
		);
	}
}

export default Body;
