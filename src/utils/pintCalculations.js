export const getGlass = (width, height) => {
  return { 
    width: width,
    height: height,
    area: {
      initial: width * height,
      available: width * height,
    },
    diameter: Math.sqrt((width * width) * (height * height)),
    verticalHeight: height,
  }
};

// export const isBeerTriangle = (angle, beer, glass) => {
// }

export const freshPint = (glass, fillAmount) => {
  const beer = { 
    area: glass.area.initial * fillAmount,
    verticalHeight: glass.area.initial * fillAmount / glass.width,
    isTriangle: false,
  };
  console.log('beer:', beer);
  glass.area.available = glass.initial - beer.area;
  return beer;
}

const glass = getGlass(40, 100);
const beer = freshPint(glass, 0.9);

const drink = (beer, overflow) => {
  const interval = 5;
  for (i = 0; i < interval; i++) {
    return setInterval((beer) => { 
      return {
        area: beer.area - (overflow.area / interval),
        verticalHeight: glass.area * fillAmount / glass.width,
      }
     }, 100);
  };
};

export const tip = (angle, beer, glass) => {
  if (beer.isTriangle) {

    
  } else {
    const overflowTriangleArea = (glass.width * glass.width) / (2 * Math.tan(angle));
    if (beer.area > glass.area - overflowTriangleArea) {
      return {
        width: glass.width,
        verticalHeight: (glass.area - overflowTriangleArea) / glass.width,
        area: glass.area - overflowTriangleArea,
      }
    }
  }
  return beer;
}
