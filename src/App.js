import React, { Component } from "react";
import Helmet from "react-helmet";
import { renderToStaticMarkup } from "react-dom/server";
import linkedIn from "./assets/LinkedIn-66px.png";
import gitHub from "./assets/GitHub-64px.png";
import PintBackground from "./components/pintBackground/PintBackground";
import "./App.css";
import Pint from "./components/pint/pint";

class App extends Component {
  state = {
    gamma: 0,
    poured: 0
  };

  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      console.log("device orientation is supported 😁");
      window.addEventListener(
        "deviceorientation",
        event => {
          this.setState({ gamma: event.gamma });
        },
        true
      );
    }
  }

  componentDidUpdate() {
    if (
      this.state.poured <
      (Math.abs(this.state.gamma) / 90) * window.innerHeight
    ) {
      this.setState({
        poured: (Math.abs(this.state.gamma) / 90) * window.innerHeight
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("deviceorientation");
  }

  render() {
    const { gamma, poured, supported } = this.state;
    const width = window.innerWidth;
    const height = window.innerHeight;
    return (
      <div className="App" style={{ height: height, overflow: 'hidden' }}>
        <Helmet title="Pick a Pint" />
        {/* <div className="background" style={{ background: this.state.dataUri }}> */}
        <Pint width={width} height={height / 10} gamma={gamma} poured={poured} style={{ backgroundColor: 'lightgrey' }} />
        <Pint width={width} height={height} gamma={gamma} poured={poured} >
          <div className="Content">
            <div className="App-header">
              {/* <h1 className="App-title">Pick a Pint!</h1> */}
            </div>
            <div className="Footer">
              <a
                href="https://www.linkedin.com/in/tommyhobbs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedIn}
                  className="Logo LinkedIn"
                  alt="LinkedIn Logo"
                />
              </a>
              <a
                href="https://github.com/tommyhobbs/pick-a-pint"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitHub} className="Logo GitHub" alt="GitHub Logo" />
              </a>
              <p>a silly idea by Tom Hobbs </p>
            </div>
          </div>
        </Pint>
      </div >
    );
  }
}

export default App;
