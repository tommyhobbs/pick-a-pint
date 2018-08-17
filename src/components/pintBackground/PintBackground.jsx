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
        <div className="PintBackground">
          {/* <p>{`Gamma: ${gamma}`}</p> */}
          {/* <img src={beer} style={{width: '200px', paddingLeft: '50px', transform: `rotate(${gamma}deg)`}}/> */}
          <svg width={glass.width} height={glass.height}>
            <rect width={beer.width} height={pintCalculations.tip(gamma, freshPint, glass).height} style={{fill: 'rgb(0,0,255)', 'stroke-width': 3, stroke: 'rgb(0,0,0)', transform: `rotate(${gamma}deg)`}} />
          </svg>
        </div>
      )}
  </DeviceOrientation>
  );
};

// PintBackground.propTypes = {
// };

// PintBackground.defaultProps = {
// };

export default PintBackground;