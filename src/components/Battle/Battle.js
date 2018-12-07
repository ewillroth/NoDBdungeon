import React, { Component } from "react";
import "./Battle.css";

class Battle extends Component {
  render() {
    return (
      <div className="Battle">
		<div className="monsterbox">
				<p>HP:monsterhp/monstermaxhp</p>
				<img src="#" alt="image of monster"></img>
				<p>name of monster</p>
		</div>
		<div className="playerbox">
			<div className="stats">
				<p>charname</p>
				<p>HP: charhp/charmaxhp</p>
			</div>
			<div className="actions">
				<button>Attack!</button>
				<button>Items</button>
				<button>Run Away</button>
			</div>
		</div>
      </div>
    );
  }
}

export default Battle;
