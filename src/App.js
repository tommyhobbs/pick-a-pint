import React, { Component } from "react";
import Helmet from "react-helmet";

import Pint from "./components/pint/Pint";
import Glass from "./components/glass/Glass";
import Label from "./components/label/Label";

import "./App.css"

class App extends Component {
  state = {
    beta: 0,
    gamma: 0,
    poured: 0,
    empty: false
  };

  prompInstall = null

  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      console.log("device orientation is supported 😁");
      window.addEventListener(
        "deviceorientation",
        event => {
          this.setState({ beta: event.beta, gamma: event.gamma });
        },
        true
      );
    }
    window.addEventListener("beforeinstallprompt", event => {

      // Create your custom "add to home screen" button here if needed.
      // Keep in mind that this event may be called multiple times, 
      // so avoid creating multiple buttons!
      this.promptInstall = () => event.prompt();
    });
  }

  componentDidUpdate() {
    const height = window.innerHeight;
    if (
      this.state.poured < (Math.abs(this.state.gamma) / 90) * height && this.state.beta >= 0
    ) {
      console.log(`gamma: `, this.state.gamma);
      console.log('beta: ', this.state.beta);
      this.setState({ poured: (Math.abs(this.state.gamma) / 90) * height });
    }
    if (this.state.poured > height * 0.98 && this.state.empty === false) {
      this.setState({ empty: true })
    }
  }

  componentWillUnmount() {
    window.removeEventListener("deviceorientation");
  }

  render() {
    const { gamma, poured, empty } = this.state;
    const width = window.innerWidth;
    const height = window.innerHeight;
    return (
      <div className="App" >
        <Helmet title="Pick a Pint" />
        <Glass width={width} height={height}>
          <Label />
          {!empty && <Pint width={width} height={height} gamma={gamma} poured={poured} />}
          {empty && <div className="empty">Drag <span role="img" aria-label="down">⬇️</span> from the top for a refill!</div>}
          {this.prompInstall && <div> Please install</div>}
        </Glass>
      </div >
    );
  }
}

export default App;
