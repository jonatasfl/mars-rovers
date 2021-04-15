import Plateau from '../models/Plateau';

describe('Test Plateau model', () => {
  it('should be defined with valid parameters', () => {
    expect(new Plateau(5, 5)).toBeDefined();
  });

  it('should throw error with invalid parameters', () => {
    expect(() => new Plateau(0, 0)).toThrow(Error);
  });

  it('should get correct max bounds', () => {
    const plateau = new Plateau(5, 5);
    expect(plateau.getMaxBounds()).toEqual({ topRightX: 5, topRightY: 5 });
  });
});
