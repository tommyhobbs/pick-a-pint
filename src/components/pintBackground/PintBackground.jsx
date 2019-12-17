import React from "react";
// import PropTypes from 'prop-types';
// import beer from '../../assets/beer.png';
import "./pintBackground.css";

const PintBackground = props => {
  const { gamma, width, height, poured } = props;
  const angle = Math.abs(gamma);
  const xPos = gamma < 0 ? 0 : -width;
  const flip = gamma < 0 ? 1 : -1;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width}>
      <rect
        width={width}
        height={0.1 * height}
        style={{
          fill: "lightgrey",
          transform: `scaleX(${flip}) translate(${xPos}px, ${poured -
            0.1 * height}px) skewY(${angle}deg)`,
          transitionProperty: "translate",
          transitionDelay: "0.5s"
        }}
      />
      <rect
        width={width}
        height={height}
        style={{
          fill: "#F3CD57",
          transform: `scaleX(${flip}) translate(${xPos}px, ${poured}px) skewY(${angle}deg)`,
          transitionProperty: "translate",
          transitionDelay: "0.5s"
        }}
      />
    </svg>
  );
};

export default PintBackground;
