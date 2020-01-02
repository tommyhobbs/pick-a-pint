import React from "react";

const Pint = props => {
  const { width, height, gamma, poured, pouredAngle } = props;
  const origin = gamma >= 0 ? 'top right' : 'top left';
  const fillLevel = ((pouredAngle - Math.abs(gamma)) / 90) * poured;
  return (
    <div style={{
      position: 'fixed',
      zIndex: -1,
      width: `${width}px`,
      height: `${height}px`,
      backgroundImage: `linear-gradient(#AE722D, #F3CF1F 50%, #AE722D 100%)`,
      top: `${fillLevel}px`,
      transform: `skewY(${-gamma}deg)`,
      transition: 'top 0.5s ease-out',
      transformOrigin: origin,
      filter: `blur(4px)`
    }}
    >
      <div style={{
        position: 'fixed',
        backgroundColor: "#EADEB4",
        width: `${width}px`,
        height: `${height / 10}px`,
      }}
      />
    </div>
  )
}

export default Pint;