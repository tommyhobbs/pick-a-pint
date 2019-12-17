import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import beer from '../../assets/beer.png';
import './pintBackground.css';

class PintBackground extends Component {
  render() {
    const { gamma, width, height } = this.props
    const fillLevel = (Math.abs(gamma) / 90) * height
    const xCenter = width / 2 + ((gamma / 90) * width / 2)
    console.log('width: ' + width)
    console.log('fillLevel: ' + fillLevel)
    const origin = `${xCenter}px ${fillLevel}px`
    console.log('origin: ', origin)
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width={width} >
        <rect
          width={Math.sqrt((width * width) + (height * height))}
          height={height}
          style={
            {
              fill: '#F3CD57',
              transform: `rotate(${-gamma}deg)`,
              transformOrigin: origin
            }
          }
          y={fillLevel}
        />
        <rect
          width='10'
          height='10'
          style={
            {
              stroke: '#006600',
              fill: '#00cc00'
            }
          }
          x={xCenter}
          y={fillLevel}
        />
      </svg>
    );
  }
};

export default PintBackground;