import React, { Component } from "react";
import Helmet from "react-helmet";

import Pint from "./components/pint/Pint";
import Glass from "./components/glass/Glass";
import Label from "./components/label/Label";

import "./App.css"

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
    const { gamma, poured } = this.state;
    const width = window.innerWidth;
    const height = window.innerHeight;
    return (
      <div className="App" >
        <Helmet title="Pick a Pint" />
        <Glass width={width} height={height}>
          <Label />
          <Pint width={width} height={height} gamma={gamma} poured={poured} />
        </Glass>
      </div >
    );
  }
}

export default App;
