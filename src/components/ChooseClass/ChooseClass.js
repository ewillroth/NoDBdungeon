import React, { Component } from 'react';
import './ChooseClass.css';
import NextButton from '../NextButton/NextButton'

class ChooseClass extends Component {

    render() {
		let display = ''
		if(this.props.class===0){
			display = 
		<div>
			<h3>Choose a class:</h3>
			<h4>{this.props.classname}</h4>
			<ul>
				<li>Hit points:{this.props.maxhp}</li>
				<li>Strength:{this.props.str}</li>
				<li>Dexterity:{this.props.dex}</li>
				<li>Intelligence:{this.props.int}</li>
				<li>Constitution:{this.props.con}
				</li>
			</ul>
		</div>
		}
		else if(this.props.class===1){
			display = 
		<div>
			<h3>Choose a class:</h3>
			<h4>{this.props.classname}</h4>
			<ul>
				<li>Hit points:{this.props.maxhp}</li>
				<li>Strength:{this.props.str}</li>
				<li>Dexterity:{this.props.dex}</li>
				<li>Intelligence:{this.props.int}</li>
				<li>Constitution:{this.props.con}
				</li>
			</ul>
		</div>
		}
		else if(this.props.class===2){
			display=
		<div>
			<h3>Choose a class:</h3>
			<h4>{this.props.classname}</h4>
			<ul>
				<li>Hit points:{this.props.maxhp}</li>
				<li>Strength:{this.props.str}</li>
				<li>Dexterity:{this.props.dex}</li>
				<li>Intelligence:{this.props.int}</li>
				<li>Constitution:{this.props.con}
				</li>
			</ul>
		</div>
		}
		else if(this.props.class===3){
			display=
		<div>
			<h3>Choose a class:</h3>
			<h4>{this.props.classname}</h4>
			<ul>
				<li>Hit points:{this.props.maxhp}</li>
				<li>Strength:{this.props.str}</li>
				<li>Dexterity:{this.props.dex}</li>
				<li>Intelligence:{this.props.int}</li>
				<li>Constitution:{this.props.con}
				</li>
			</ul>
		</div>
		}
        return (
            <div className="ChooseClass">
			   <div className="classButtons">
			   <NextButton clickNext={this.props.prevClass} display="<"/>
					{display}
			   <NextButton clickNext={this.props.nextClass} display=">"/>
			   </div>
            </div>
        );
    }
}

export default ChooseClass;
