import React from 'react';
import './EnterDungeon.css';

const EnterDungeon = (props) => {
        return (
            <div className="EnterDungeon">
                <img src="#" alt="entrance pic"></img>
				<button onClick={props.clickEnter}>Enter Dungeon!</button>
            </div>
        );
}

export default EnterDungeon;
