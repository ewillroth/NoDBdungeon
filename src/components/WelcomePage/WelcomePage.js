import React, { Component } from 'react';
import './WelcomePage.css';

class WelcomePage extends Component {

    render() {
        return <div className="WelcomePage">
            <p className="about">
              NoDB Dungeon is a simple dungeon crawl game that uses the
              D&D 5th Edition API
            </p>
            <img className= "logopic" src="#" alt="logopic" />
          </div>;
    }
}

export default WelcomePage;
