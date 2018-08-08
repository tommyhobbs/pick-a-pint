import { getGlass, freshPint, tip } from './pintCalculations';

describe('Pint calculation tests', () => {
  describe('pour pint', () => {
    let glass = {};
    beforeEach(() => {
      glass = getGlass(40, 100);
    });

    it('should pour a pint to the amount specified', () => {
      expect(freshPint(glass, 0.8).verticalHeight).toBe(80);
    });


    it('should return the pint as is if the tipped is called with no angle', () => {
      const beer = freshPint(glass, 0.8);
      expect(tip(0, beer, glass)).toBe(beer);
    });

    
  });
});
