import { getGlass, freshPint, tip } from './pintCalculations';

describe('Pint calculation tests', () => {
  describe('pour pint', () => {
    const glass = getGlass(40, 100);

    it('should pour a pint to the amount specified', () => {
      expect(freshPint(glass, 0.8).height).toBe(80);
    });


    it('should return the pint as is if the tipped is called with no angle', () => {
      const beer = freshPint(glass, 0.8);
      expect(tip(0, beer, glass)).toEqual(beer);
    });

    it('should reduce the amount of beer if a new pint is tipped sufficiently', () => {
      const beer = freshPint(glass, 0.8);
      let newBeer = tip(30, beer, glass);
      expect(newBeer.height).toBeLessThan(beer.height);
    });
  });
});
