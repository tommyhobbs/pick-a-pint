import React from "react";

const Pint = props => {
  const { width, height, children } = props;
  return (
    <div style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0) -10%, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 0) 50%)`
    }}
    >
      {children}
    </div>
  )
}

export default Pint;