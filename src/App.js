import React, { Component } from "react";
import Helmet from "react-helmet";
import { renderToStaticMarkup } from "react-dom/server";
import linkedIn from "./assets/LinkedIn-66px.png";
import gitHub from "./assets/GitHub-64px.png";
import PintBackground from "./components/pintBackground/PintBackground";
import "./App.css";

class App extends Component {
  svgString = encodeURIComponent(
    renderToStaticMarkup(
      <PintBackground
        gamma={0}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    )
  );
  state = {
    gamma: 0,
    poured: 0,
    dataUri: `url("data:image/svg+xml,${this.svgString}`
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

    const svgString = encodeURIComponent(
      renderToStaticMarkup(
        <PintBackground
          poured={this.state.poured}
          gamma={this.state.gamma}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )
    );
    const dataUri = `url("data:image/svg+xml,${svgString}")`;
    this.state.dataUri !== dataUri && this.setState({ dataUri });
  }

  componentWillUnmount() {
    window.removeEventListener("deviceorientation");
  }

  render() {
    return (
      <div className="App">
        <Helmet title="Pick a Pint" />
        <div className="background" style={{ background: this.state.dataUri }}>
          <div className="Content">
            <div className="App-header">
              {/* <img src={logo} className="App-logo" alt="logo" />
              <span role="img"  className="App-logo" aria-label="pint emoji">🍺</span> */}
              <h1 className="App-title">Pick a Pint!</h1>
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
        </div>
      </div>
    );
  }
}

export default App;
