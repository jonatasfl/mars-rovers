import { Command } from "../interfaces/rover";

export function getNewDirection(currentDir: string, cmd: Exclude<Command, 'M'>) {
  const dirMap: any = {
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