import React, { Component } from "react";
import "./Defeat.css";

class Defeat extends Component {
	render() {
		if(this.props.message!=='run'){
			return (
				<div className="Defeat">
					<h3>Defeat</h3>
					<p>You were killed by the {this.props.monster.name}</p>
				</div>
			);
		}else{
			return (
				<div className="Defeat">
					<h3>Defeat</h3>
					<p>You were unable to escape from the {this.props.monster.name}</p>
				</div>
			);
		}
	}
}

export default Defeat;
