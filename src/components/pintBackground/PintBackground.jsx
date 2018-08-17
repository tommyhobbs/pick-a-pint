import React from 'react';
// import PropTypes from 'prop-types';
import DeviceOrientation from 'react-device-orientation';
import beer from '../../assets/beer.png';
import './pintBackground.css';
import * as pintCalculations from '../../utils/pintCalculations';

const PintBackground = (props) => {
  const glass = pintCalculations.getGlass(window.innerWidth, window.innerHeight);
  const freshPint = pintCalculations.freshPint(glass, 0.8);
  return (
    <DeviceOrientation>
      {({ absolute, alpha, beta, gamma }) => (
        <svg width={glass.width} height={glass.height}>
          <rect width={beer.width} height={pintCalculations.tip(gamma, freshPint, glass).height} style={{fill: '#F3CD57', transform: `rotate(${gamma}deg)`}} />
        </svg>
      )}
  </DeviceOrientation>
  );
};

// PintBackground.propTypes = {
// };

// PintBackground.defaultProps = {
// };

export default PintBackground;