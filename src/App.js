import React, { Component } from 'react';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="Pick a Pint" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pick a Pint <span role="img" aria-label="pint emoji">🍺</span></h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
