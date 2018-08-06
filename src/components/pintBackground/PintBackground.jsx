import React from 'react';
// import PropTypes from 'prop-types';
import DeviceOrientation from 'react-device-orientation';
import beer from '../../assets/beer.png';
import './pintBackground.css';

const PintBackground = (props) => {
  return (
    <DeviceOrientation>
      {({ absolute, alpha, beta, gamma }) => (
        <div className="PintBackground">
          <p>{`Gamma: ${gamma}`}</p>
          <img src={beer} style={{width: '200px', paddingLeft: '50px', transform: `rotate(${gamma}deg)`}}/>
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