import React from 'react';
// import PropTypes from 'prop-types';
import beer from '../../assets/beer.png';
import './pintBackground.css';
import * as pintCalculations from '../../utils/pintCalculations';

const PintBackground = (props) => {
  const {gamma} = props;
  const glass = pintCalculations.getGlass(window.innerWidth, window.innerHeight);
  console.log('glass: ', glass);
  /* '#F3CD57' */
  const freshPint = pintCalculations.freshPint(glass, 0.8);
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={glass.width} height={glass.height}>
      <rect width={beer.width} height={pintCalculations.tip(gamma, freshPint, glass).height} style={{fill: 'blue', stroke: 'pink', strokeWidth: 5, fillOpacity: 0.3, strokeOpacity: 0.9}} />
    </svg>
  );
};

export default PintBackground;