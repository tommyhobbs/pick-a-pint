import React from "react";

const Pint = props => {
  const { width, height, gamma, poured, children } = props;
  const xPos = -gamma / 90 * width / 2;
  return (
    <div style={{
      position: 'fixed',
      zIndex: -1,
      width: `${width}px`,
      height: `${height}px`,
      backgroundImage: `linear-gradient(#AE722D, #F3CF1F 50%, #AE722D 100%)`,
      top: `${poured}px`,
      right: `${xPos}px`,
      transform: `skewY(${-gamma}deg) scale(${1 + (Math.abs(gamma) / 90)})`,
      transition: 'top 0.5s linear',
      transformOrigin: 'center bottom',
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
      {children}
    </div>
  )
}

export default Pint;