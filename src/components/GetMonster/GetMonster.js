import React, { Component } from 'react';
import './GetMonster.css';
import Discovery from '../Discovery/Discovery';
import Battle from '../Battle/Battle';
import Victory from '../Victory/Victory';
import Defeat from '../Defeat/Defeat';

class GetMonster extends Component {
    constructor(props) {
        super(props)
        this.state = {
			pagenumber: 0,
			battles: 0
		}
		this.clickNext=this.clickNext.bind(this);
		this.clickPrev=this.clickPrev.bind(this);
    }

	clickNext() {
		this.setState({
			pagenumber: this.state.pagenumber + 1
		})
	}
	clickPrev() {
		this.setState({
			pagenumber: this.state.pagenumber - 1
		})
	}

	render() {
		let display = '';
		if (this.state.pagenumber === 0) {
			display =
				<div className="GetMonster">
					<Discovery clickNext={this.clickNext} battles={this.state.battles}/>
				</div>;
		}
		else if (this.state.pagenumber === 1) {
			display =
				<div className="GetMonster">
					<Battle/>
				</div>;
		}
		else if (this.state.pagenumber === 2) {
			display =
				<div className="GetMonster">
					<Victory/>
				</div>;
		}
		else if (this.state.pagenumber === 3) {
			display =
				<div className="GetMonster">
					<Defeat/>
				</div>;
		}

		return (
			<>
				{display}
			</>
		);
	}
}

export default GetMonster;
