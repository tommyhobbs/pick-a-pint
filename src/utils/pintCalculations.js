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

export const freshPint = (glass, fillAmount) => {
  const beer = { 
    width: 2 * glass.height,
    height: glass.area.initial * fillAmount / glass.width,
  };
  console.log('beer:', beer);
  return beer;
}

const glass = getGlass(40, 100);
const beer = freshPint(glass, 0.9);

// const drink = (angle, glassBeforePour) => {
//   // const interval = 5;
//   // for (i = 0; i < interval; i++) {
//   //   return setInterval((beer) => { 
//   //     return {
//   //       area: beer.area - (overflow.area / interval),
//   //       verticalHeight: glass.area * fillAmount / glass.width,
//   //     }
//   //    }, 100);
//   // };

//   const glass = calculateGlassAvailable(angle, glassBeforePour);
//   const beer = { 
//     area: glass.area.available,
//     height: glass.height,
//   };

//   return beer;
// };

export const tip = (angle, beer, glass) => {
  // pour clockwise
  // if (angle > 0) {
  const maxHeight = glass.height * Math.cos(angle);
  const newHeight = beer.height > maxHeight ? maxHeight : beer.height;
  // pour anticlockwise
  // } else {
  // }
  const newBeer = { 
    width: 2 * glass.height,
    height: newHeight,
  };
  console.log('newBeer: ', newBeer);
  return newBeer;
}
