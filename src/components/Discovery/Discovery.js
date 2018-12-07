import React, { Component } from "react";
import "./Discovery.css";
import NextButton from '../NextButton/NextButton';

class Discovery extends Component {
  render() {
	if(this.props.battles===0){
		return (
			<div className="Discovery">
				<p>Whoa.. you've stumbled upon a vicious looking (first monstername)!</p>
				<img src="#" alt="img of monster"></img>
				<NextButton display='Battle!'clickNext={this.props.clickNext}/>
			</div>
		);
	}
	else{
		return (
			<div className="Discovery">
				<p>Whoa.. you've stumbled upon a vicious looking (monstername)!</p>
				<img src="#" alt="img of monster"></img>
				<NextButton display='Battle!'clickNext={this.props.clickNext}/>
			</div>
		)
	}
  }
}

export default Discovery;
