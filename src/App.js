import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { renderToStaticMarkup } from 'react-dom/server'
import linkedIn from './assets/LinkedIn-66px.png';
import gitHub from './assets/GitHub-64px.png';
import PintBackground from './components/pintBackground/PintBackground';
import './App.css';

class App extends Component {
  svgString = '';
  dataUri = 'unset';
  state = {
    gamma: 0,
    dataUri: '',
  };

  handleOrientation = event => {
    const gamma = Math.round(event.gamma);
    console.log('gamma: ', gamma);
    this.setState(gamma);
  };

  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      console.log("DeviceOrientation is supported");
     } else if (window.OrientationEvent) {
      console.log("MozOrientation is supported");
     }
    window.addEventListener('deviceorientation', this.handleOrientation, true);
  };

  componentWillUnmount() {
    window.removeEventListener('deviceorientation', this.handleOrientation, true);
  }

  render() {
    const svgString = encodeURIComponent(renderToStaticMarkup(<PintBackground gamma={this.state.gamma} />));
    console.log('svg string: ', svgString);
    const dataUri = `url("data:image/svg+xml,${svgString}")`;
    console.log('dataUri: ', dataUri);
    return (
      <div className="App">
        <Helmet title="Pick a Pint" />
        <div className="background" style={{background: dataUri, transform: `rotate(${this.state.gamma}deg)`}} >
          <div className="Content">
            <div className="App-header">
              {/* <img src={logo} className="App-logo" alt="logo" />
              <span role="img"  className="App-logo" aria-label="pint emoji">🍺</span> */}
              <h1 className='App-title'>Pick a Pint!</h1>
            </div>
            <div className="Body">
              <p className="Intro">
                Currently in development so please, watch this space! {this.state.gamma}
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
        </div>
      </div>
    );
  }
}

export default App;
