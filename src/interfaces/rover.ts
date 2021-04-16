export type Command = 'L' | 'R' | 'M';
export type Direction = 'N' | 'S' | 'E' | 'W';
export interface DirMap {
  N: {
    L: Direction;
    R: Direction;
  };
  S: {
    L: Direction;
    R: Direction;
  };
  E: {
    L: Direction;
    R: Direction;
  };
  W: {
    L: Direction;
    R: Direction;
  };
}
