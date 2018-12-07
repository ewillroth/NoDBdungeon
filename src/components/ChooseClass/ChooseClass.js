import React, { Component } from 'react';
import './ChooseClass.css';
import NextButton from '../NextButton/NextButton'

class ChooseClass extends Component {
	constructor(props){
		super(props)
		this.state={
			class: this.props.class,
			classname: this.props.classname
		}
	}

	componentDidUpdate(prevProps, prevState){
		if(this.props!==prevProps){
			this.setState({
				class: this.props.class,
				classname: this.props.classname
			})
		}
	}

    render() {
		let display = ''
		if(this.props.class===0){
			display = 
			
				<h4>{this.props.classname}</h4>
			
		}
		else if(this.props.class===1){
			display = 
			
				<h4>{this.props.classname}</h4>
			
		}
		else if(this.props.class===2){
			display=
			
				<h4>{this.props.classname}</h4>
			
		}
		else if(this.props.class===3){
			display=
			
				<h4>{this.props.classname}</h4>
			
		}
        return (
            <div className="ChooseClass">
               {display}
			   <NextButton clickNext={this.props.prevClass} display="<"/>
			   <NextButton clickNext={this.props.nextClass} display=">"/>
            </div>
        );
    }
}

export default ChooseClass;
