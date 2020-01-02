import React, { Component } from "react";

import Pint from "./components/pint/Pint";
import Glass from "./components/glass/Glass";
import Label from "./components/label/Label";

import "./App.css"

class App extends Component {
  state = {
    gamma: 0,
    poured: window.innerHeight * 0.02,
    pouredAngle: 0,
    empty: false
  };

  prompInstall = null

  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      console.log("device orientation is supported 😁");
      window.addEventListener("deviceorientation", event => {
        this.setState({ gamma: event.gamma });
      }, true);
    }
  }

  componentDidUpdate() {
    const height = window.innerHeight;
    if (this.state.poured < (Math.abs(this.state.gamma) / 90) * height) {
      this.setState({ poured: (Math.abs(this.state.gamma) / 90) * height });
    }
    if (this.state.pouredAngle < Math.abs(this.state.gamma)) {
      this.setState({ pouredAngle: Math.abs(this.state.gamma) })
    }
    if (this.state.poured > height * 0.97 && this.state.empty === false) {
      this.setState({ empty: true })
    }

    console.log(`gamma: `, this.state.gamma);
    console.log('poured: ', this.state.poured);
    console.log('pouredAngle: ', this.state.pouredAngle);
  }

  componentWillUnmount() {
    window.removeEventListener("deviceorientation");
  }

  render() {
    const { gamma, poured, empty, pouredAngle } = this.state;
    const width = window.innerWidth;
    const height = window.innerHeight;
    return (
      <div className="App" >
        <Glass width={width} height={height}>
          <Label />
          {!empty && <Pint width={width} height={height} gamma={gamma} poured={poured} pouredAngle={pouredAngle} />}
          {empty && <div className="empty">Drag <span role="img" aria-label="down">⬇️</span> from the top for a refill!</div>}
        </Glass>
      </div >
    );
  }
}

export default App;
