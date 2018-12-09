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
					<CaptureName 
					name={this.props.name} 
					onChange={this.props.onChange}
					/>
					<NextButton 
					display='Next >'
					clickNext={this.clickNext}
					/>
				</div>;
		}
		else if (this.state.pagenumber === 1) {
			display = 
				<div className="CreateCharacter">
					<ChooseClass 
					classname={this.props.classname} 
					nextClass={this.props.nextClass} 
					prevClass={this.props.prevClass} 
					class={this.props.class} 
					maxhp={this.props.maxhp}
					str={this.props.str}
					dex={this.props.dex}
					int={this.props.int}
					con={this.props.con}
					/>
					<NextButton 
					display='< Previous'
					clickNext={this.clickPrev} 
					/>
					<NextButton 
					display='Next >' 
					clickNext={this.clickNext} 
					/>
				</div>;
		}
		else if (this.state.pagenumber === 2) {
			display =
				<div className="CreateCharacter">
					<EnterDungeon 
					name={this.props.name}
					clickEnter={this.props.clickEnter}
					classname={this.props.classname}
					maxhp={this.props.maxhp}
					str={this.props.str}
					dex={this.props.dex}
					int={this.props.int}
					con={this.props.con}
					level={this.props.level}
					/>
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
