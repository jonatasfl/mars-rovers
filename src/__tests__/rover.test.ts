import Rover from "../models/Rover"

describe('Tests for the Rover model', () => {
  it('should be defined with valid parameters', () => {
    expect(new Rover(1, 1, 'N')).toBeDefined();
  });

  it('should throw error if X or Y coordinate is invalid', () => {
    expect(() => new Rover(-1, 1, 'S')).toThrow();
  });

  it('should return correct position after command execution', () => {
    const rover = new Rover(0, 0, 'N');
    expect(rover.execute('RM')).toBe('1 0 E');
    expect(rover.execute('LMM')).toBe('1 2 N');
    expect(rover.execute('LM')).toBe('0 2 W');
    expect(rover.execute('LM')).toBe('0 1 S');
  });

  it('should throw error if invalid command is provided', () => {
    const rover = new Rover(0, 0, 'N');
    expect(() => rover.execute('RXM')).toThrow(); 
  })
})