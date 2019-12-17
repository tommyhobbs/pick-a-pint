import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { renderToStaticMarkup } from 'react-dom/server'
import linkedIn from './assets/LinkedIn-66px.png';
import gitHub from './assets/GitHub-64px.png';
import PintBackground from './components/pintBackground/PintBackground';
import './App.css';

class App extends Component {
  isFreshPint = true;
  svgString = encodeURIComponent(renderToStaticMarkup(<PintBackground gamma={0} width={window.innerWidth} height={window.innerHeight} />));
  state = {
    gamma: 0,
    dataUri: `url("data:image/svg+xml,${this.svgString}`,
  };

  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      console.log('device orientation is supported 😁');
      let self = this;
      window.addEventListener('deviceorientation', event => {
        // console.log(event);
        // console.log('typeof gamma: ', typeof event.gamma);
        // const gamma = Math.round(Number(event.gamma));
        // console.log('gamma: ', gamma);
        self.setState({ ...self.state, gamma: event.gamma });
      }, true);
    }
  };

  componentDidUpdate() {
    this.isFreshPint = false;
    const svgString = encodeURIComponent(renderToStaticMarkup(<PintBackground gamma={this.state.gamma} width={window.innerWidth} height={window.innerHeight} />));
    this.isFreshPint = !this.isFreshPint;
    // console.log('svg string: ', svgString);
    const dataUri = `url("data:image/svg+xml,${svgString}")`;
    this.state.dataUri !== dataUri && this.setState({ dataUri });
  }

  componentWillUnmount() {
    window.removeEventListener('deviceorientation', this.handleOrientation, true);
  }

  render() {
    return (
      <div className="App">
        <Helmet title="Pick a Pint" />
        <div className="background" style={{ background: this.state.dataUri, backgroundPosition: 'bottom' }} >
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
              <a href='https://www.linkedin.com/in/tommyhobbs/' target="_blank" rel="noopener noreferrer">
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
