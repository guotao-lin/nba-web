import React, { Component } from 'react';
import { TopNavBar } from './TopNavBar';
import logo from '../assets/images/nba-logoman-word-white.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
