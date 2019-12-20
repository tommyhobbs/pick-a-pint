import React from "react";

const Pint = props => {
  const { width, height, gamma, poured, children } = props;
  const xPos = -gamma / 90 * width / 2;
  return (
    <div style={{
      backgroundColor: "#F3CD57",
      position: 'fixed',
      width: `${width}px`,
      height: `${height}px`,
      top: `${poured}px`,
      right: `${xPos}px`,
      transform: `skewY(${-gamma}deg) scale(${1 + Math.abs(gamma) / 90})`,
      transition: 'top 0.5s linear'
    }}
    >
      {children}
    </div>
  )
}

export default Pint;