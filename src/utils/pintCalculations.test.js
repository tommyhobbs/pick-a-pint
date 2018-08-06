import { getGlass, pourPint } from './pintCalculations';

describe('Pint calculation tests', () => {
  describe('pour pint', () => {
    let glass = {};
    beforeEach(() => {
      glass = getGlass(40, 100);
    });

    it('should pour a pint to the amount specified', () => {
      expect(pourPint(glass, 0.8).verticalHeight).toBe(80);
    });
  });
});
