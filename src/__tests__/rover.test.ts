import Plateau from "../models/Plateau";
import Rover from "../models/Rover"

describe('Tests for the Rover model', () => {
  const plateau = new Plateau(5, 5);

  it('should be defined with valid parameters', () => {
    expect(new Rover(plateau, 1, 1, 'N')).toBeDefined();
  });

  it('should throw error if X or Y coordinate is invalid', () => {
    expect(() => new Rover(plateau, -1, 1, 'S')).toThrow();
    expect(() => new Rover(plateau, 2.5, 1, 'S')).toThrow();
    expect(() => new Rover(plateau, 6, 1, 'S')).toThrow();
  });

  it('should return correct position after command execution', () => {
    const rover = new Rover(plateau, 0, 0, 'N');
    expect(rover.execute('RM')).toBe('1 0 E');
    expect(rover.execute('LMM')).toBe('1 2 N');
    expect(rover.execute('LM')).toBe('0 2 W');
    expect(rover.execute('LM')).toBe('0 1 S');
  });

  it('should throw error if invalid command is provided', () => {
    const rover = new Rover(plateau, 0, 0, 'N');
    expect(() => rover.execute('RXM')).toThrow(); 
  });

  it('should throw error if invalid direction is provided', () => {
    expect(() => new Rover(plateau, 0, 0, 'X')).toThrow(); 
  });

  it('should throw error if try to exceed plateau bounds', () => {
    const rover = new Rover(plateau, 0, 0, 'N');
    expect(() => rover.execute('LM')).toThrow(); 
    expect(() => rover.execute('LM')).toThrow(); 
    expect(() => rover.execute('LMMMMMM')).toThrow(); 
    expect(() => rover.execute('LMMMMMMMMM')).toThrow(); 
  })
})