import React from 'react';
// import PropTypes from 'prop-types';
import DeviceOrientation from 'react-device-orientation';
import './pintBackground.css';

const PintBackground = (props) => {
  return (
    <DeviceOrientation>
      {({ absolute, alpha, beta, gamma }) => (
        <div className="PintBackground">
          {`I'M A BEER HEAR ME POUR! Gamma: ${gamma}`}
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