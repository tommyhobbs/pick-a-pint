import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          <h2>Pick a Pint <span role="img"  className="App-logo" aria-label="pint emoji">🍺</span></h2>
        </p>
      </div>
    );
  }
}

export default App;
