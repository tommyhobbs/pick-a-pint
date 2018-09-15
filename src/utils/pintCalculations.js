export const getGlass = (width, height) => {
  return { 
    width: width,
    height: height,
  }
};

export const freshPint = (glass, fillAmount) => {
  const beer = { 
    width: Math.round(2 * glass.height),
    height: Math.round(glass.height * fillAmount),
  };
  console.log('beer:', beer);
  return beer;
}

export const tip = (angle, beer, glass) => {
  // pour clockwise
  if (angle > 0) {
    console.log('pintCalculations:tip angle: ', angle);
    const maxHeight = Math.round(glass.height * Math.cos(angle));
    console.log('pintCalculations:tip maxHeight: ', maxHeight);
    const newHeight = beer.height > maxHeight ? maxHeight : beer.height;
    console.log('pintCalculations:tip newHeight: ', newHeight);
    // pour anticlockwise
    // } else {
    // }
    const newBeer = { 
      width: 2 * glass.height,
      height: newHeight,
    };
    console.log('pintCalculations:tip newBeer: ', newBeer);
    
    // return drink(beer, newBeer);
    return (drink(beer, newBeer));
    // return newBeer;
  }
  return beer;
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
