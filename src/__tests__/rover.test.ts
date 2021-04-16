import Rover from "models/Rover"

describe('Tests for the Rover model', () => {
  it('should be defined with valid parameters', () => {
    expect(new Rover(1, 1, 'N')).toBeDefined();
  });

  it('should throw error if X or Y coordinate is invalid', () => {
    expect(() => new Rover(-1, 1, 'S')).toThrow();
  });

  it('should be able to get current position', () => {
    const rover = new Rover(0, 0, 'N');
    expect(rover.getCurrentPosition()).toBe('0 0 N');
  })
})