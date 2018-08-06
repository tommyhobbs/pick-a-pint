export const getGlass = (width, height) => {
  return { 
    width: width,
    height: height,
    area: width * height,
    diameter: Math.sqrt((width * width) * (height * height)),
  }
};

export const pourPint = (glass, fillAmount) => {
  return { 
    area: glass.area * fillAmount,
    verticalHeight: glass.area * fillAmount / glass.width,
  }
}

const glass = getGlass(40, 100);
const beer = pourPint(glass, 0.9);

// if the beer is less than half of the area of the glass
// then the shape of the beer will be a triangle
export const isBeerTriangle = (beer, glass) => {
  return glass.area / 2 >= beer.area;
}

export const getBeer = (beer, glass, gamma) => {
  if (!isBeerTriangle(beer, glass)){
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
