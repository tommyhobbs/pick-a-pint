import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import beer from '../../assets/beer.png';
import "./pintBackground.css";

class PintBackground extends Component {
  render() {
    const { gamma, width, height } = this.props;
    const angle = Math.abs(gamma);
    const xPos = gamma < 0 ? 0 : -width;
    const flip = gamma < 0 ? 1 : -1;
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width}>
        <rect
          width={width}
          height={height}
          style={{
            fill: "#F3CD57",
            transform: `scaleX(${flip}) translate(${xPos}px, ${0}px) skewY(${angle}deg)`
          }}
        />
        <rect
          width="10"
          height="10"
          style={{
            stroke: "#006600",
            fill: "#00cc00"
          }}
          x={xPos}
          y={0}
        />
      </svg>
    );
  }
}

export default PintBackground;
