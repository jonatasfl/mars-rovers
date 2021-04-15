import Rover from "models/Rover"

describe('Tests for the Rover model', () => {
  it('should be defined with valid parameters', () => {
    expect(new Rover(1, 1, 'N')).toBeDefined();
  });

  it('should throw error with invalid parameters', () => {
    expect(() => new Rover(-1, 1, 'S')).toThrow();
  });
})