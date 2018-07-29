import React, { Component } from 'react';
import Helmet from 'react-helmet';
import linkedIn from './LinkedIn-66px.png';
import gitHub from './GitHub-64px.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="Pick a Pint" />
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <span role="img"  className="App-logo" aria-label="pint emoji">🍺</span> */}
          <h1 className='App-title'>Pick a Pint!</h1>
        </div>
        <div className="Content">
          <p className="Intro">
            Currently in development so please, watch this space!
          </p> 
        </div>
        <div className="Footer">
          <a href='https://www.linkedin.com/in/tomghobbs/' target="_blank" rel="noopener noreferrer">
            <img src={linkedIn} className="Logo LinkedIn" alt="LinkedIn Logo" />
          </a>
          <a href='https://github.com/tommyhobbs/pick-a-pint' target="_blank" rel="noopener noreferrer">
            <img src={gitHub} className="Logo GitHub" alt="GitHub Logo" />
          </a>
          <p>a silly idea by Tom Hobbs </p>
        </div>
      </div>
    );
  }
}

export default App;
