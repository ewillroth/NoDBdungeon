import React, { Component } from 'react';
import './CreateCharacter.css';
import NextButton from '../NextButton/NextButton';
import CaptureName from '../CaptureName/CaptureName';
import ChooseClass from '../ChooseClass/ChooseClass';
import EnterDungeon from '../EnterDungeon/EnterDungeon'

class CreateCharacter extends Component {
	constructor(props) {
		super(props)
		this.state = {
		pagenumber: 0
		}
		this.clickNext = this.clickNext.bind(this)
		this.clickPrev = this.clickPrev.bind(this)
	}

	clickNext(){
		this.setState({
			pagenumber: this.state.pagenumber+1
		})
	}
	clickPrev(){
		this.setState({
			pagenumber: this.state.pagenumber-1
		})
	}

	render() {
		let display = '';
		if (this.state.pagenumber === 0) {
			display = 
				<div className="CreateCharacter">
					<CaptureName />
					<NextButton display='Next >'clickNext={this.clickNext}/>
				</div>;
		}
		else if (this.state.pagenumber === 1) {
			display = 
				<div className="CreateCharacter">
					<ChooseClass />
					<NextButton display='< Previous'clickNext={this.clickPrev} />
					<NextButton display='Next >' clickNext={this.clickNext} />
				</div>;
		}
		else if (this.state.pagenumber === 2) {
			display =
				<div className="CreateCharacter">
					<EnterDungeon clickEnter={this.props.clickEnter}/>
				</div>;
		}

		return (
			<>
				{display}
			</>
		);
	}
}

export default CreateCharacter;
