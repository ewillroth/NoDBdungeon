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
        if (this.state.pagetracker===0) {
            display = <WelcomePage />
        }
        else if(this.state.pagetracker===1){
            display = <CreateCharacter clickEnter={this.props.clickEnter}/>
        }
        else if(this.state.pagetracker===2){
            display = <GetMonster />
        }
        else if(this.state.pagetracker===3){
            display = <TitleBook/>
        }

        return (
            <div className="Body">
                {display}
            </div>
        );
    }
}

export default Body;
