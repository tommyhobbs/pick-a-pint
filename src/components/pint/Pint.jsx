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
      backgroundColor: "#F3CD57",
      top: `${poured}px`,
      right: `${xPos}px`,
      transform: `skewY(${-gamma}deg) scale(${1 + Math.abs(gamma) / 90})`,
      transition: 'top 0.5s linear',
      filter: `blur(4px)`
    }}
    >
      <div style={{
        position: 'fixed',
        backgroundColor: "#FFF2CC",
        width: `${width}px`,
        height: `${height / 10}px`,
        transition: 'top 0.5s linear'
      }}
      />
      {children}
    </div>
  )
}

export default Pint;