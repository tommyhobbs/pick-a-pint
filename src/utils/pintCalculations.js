export const getGlass = (width, height) => {
  return { 
    width: width,
    height: height,
    area: width * height,
    diameter: Math.sqrt((width * width) * (height * height)),
  }
};

export const isBeerTriangle = (beerArea, glass) => {
  return glass.area / 2 >= beerArea;
}

export const pourPint = (glass, fillAmount) => {
  return { 
    area: glass.area * fillAmount,
    verticalHeight: glass.area * fillAmount / glass.width,
    isTriangle: isBeerTriangle((glass.area * fillAmount), glass),
  }
}

const glass = getGlass(40, 100);
const beer = pourPint(glass, 0.9);

// if the beer is less than half of the area of the glass
// then the shape of the beer will be a triangle

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

const calculateOverFlow = (beer, glass, gamma) => {
  maxTraingleHeight
}

export const getBeer = (beer, glass, gamma) => {
  if (beer.isTriangle) {

  } else {
    const overflowTriangleArea = (glass.width * glass.width) / (2 * Math.tan(gamma));
    if (beer.area > glass.area - overflowTriangleArea) {
      return {
        width: glass.width,
        verticalHeight: (glass.area - overflowTriangleArea) / glass.width,
        area: glass.area - overflowTriangleArea,
      }
    }
  }
}
