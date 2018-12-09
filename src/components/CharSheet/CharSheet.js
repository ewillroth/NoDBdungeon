import React from 'react'
import './CharSheet.css'

const CharSheet = props => {
	return <div>
		<p>{props.character.name}</p>
		<p>HP: {props.character.currenthp}</p>
		<p>Str: {props.character.str}</p>
		<p>Dex: {props.character.dex}</p>
		<p>Int: {props.character.int}</p>
		<p>Con: {props.character.con}</p>
		<button onClick={props.continue}>Continue...</button>
	</div>
}

export default CharSheet;