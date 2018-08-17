import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { renderToStaticMarkup } from 'react-dom/server'
import linkedIn from './assets/LinkedIn-66px.png';
import gitHub from './assets/GitHub-64px.png';
import PintBackground from './components/pintBackground/PintBackground';
import './App.css';

class App extends Component {
  svgString = '';
  dataUri = '';
  state = {
    absolute: true,
    alpha: 0,
    beta: 0,
    gamma: 0,
  };

  handleOrientation = event => {
    const { absolute, alpha, beta, gamma } = event;
    this.setState({ absolute, alpha, beta, gamma });
    this.svgString = encodeURIComponent(renderToStaticMarkup(<PintBackground absolute={this.state.absolute} alpha={this.state.alpha} beta={this.state.beta} gamma={this.state.gamma}/>));
    this.dataUri = `url("data:image/svg+xml,${this.svgString}")`;
  };

  componentDidMount() {
    window.addEventListener('deviceorientation', this.handleOrientation, true);
  };

  render() {
    return (
      <div className="App" style={{background: this.dataUri, width: window.innerWidth, height: window.innerHeight}}>
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
