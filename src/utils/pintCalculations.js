export const getGlass = (width, height) => {
  return { 
    width: width,
    height: height,
  }
};

export const freshPint = (glass, fillAmount) => {
  const beer = { 
    width: 2 * glass.height,
    height: glass.height * fillAmount,
  };
  console.log('beer:', beer);
  return beer;
}

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
  
  // return drink(beer, newBeer);
  return newBeer;
};

export const drink = (oldBeer, newBeer) => {
  const interval = 5;
  const diff = oldBeer.height - newBeer.height;
  console.log('diff: ', diff);
  const step = diff / interval;
  console.log('step: ', step);
  let beer = oldBeer;
  for (let i = 0; i < interval; i++) {
    // eslint-disable-next-line 
    setTimeout(() => { 
      beer = {
        width: beer.width,
        height: oldBeer.height - (step * interval),
      }
      console.log('beer getting poured: ',beer);
     }, 200);    
  };
  return beer;
};
