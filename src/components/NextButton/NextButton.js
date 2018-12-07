import React from 'react';
import './NextButton.css';

const NextButton = props => { return <button className="NextButton" onClick={props.clickNext}>{props.display}</button> }

export default NextButton;
