import React, { Component } from "react";
import "./Victory.css";
import victory from '../../art/victory.jpeg'

class Victory extends Component {
	render() {
		if(this.props.message!=='run'){
			return <div className="Victory">
					<img src={victory} alt="laurel crown" />
					<h3>Victory</h3>
					<p>You've defeated the {this.props.monster.name}</p>
					<br />
					<p>+{this.props.monster.hit_points} xp</p>
					<button className="NextButton" onClick={() => this.props.continue(this.props.xp)}>
						Continue...
					</button>
				</div>;
		}
		else{
			return(
				<div className="Victory">
					<img src={victory} alt="laurel crown"></img>
					<h3>Victory</h3>
					<p>You've escaped from the {this.props.monster.name}</p>
					<br />
					<p>+0 xp</p>
					<button className="NextButton" onClick={() => this.props.continue(this.props.xp)}>Continue...</button>
				</div>
			)
		}
	}
}

export default Victory;
