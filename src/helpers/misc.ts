import { Command, Direction, DirMap } from "../interfaces/rover";

export function getNewDirection(currentDir: Direction, cmd: Exclude<Command, 'M'>) {
  const dirMap: DirMap = {
    N: {
      L: "W",
      R: "E"
    },
    S: {
      L: "E",
      R: "W"
    },
    E: {
      L: "N",
      R: "S"
    },
    W: {
      L: "S",
      R: "N"
    }
  };

  return dirMap[currentDir][cmd];
}