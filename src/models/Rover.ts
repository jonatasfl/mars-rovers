import { Command, Direction, DirMap } from "interfaces/rover";
import { oneOf, min } from "validators";

export default class Rover {
  @min(0)
  private coordX: number;

  @min(0)
  private coordY: number;

  @oneOf(['N', 'S', 'E', 'W'])
  private direction: Direction;

  private dirMap: DirMap = {
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
  }

  constructor(coordX: number, coordY: number, direction: Direction) {
    this.coordX = coordX;
    this.coordY = coordY;
    this.direction = direction;
  }


  public execute(commands: Command[]): void {
    if (!Array.isArray(commands)) {
      throw new Error('Commands needs to be an array of strings');
    }

    commands.forEach(cmd => {
      if (cmd === 'L' || cmd === 'R') {
        this.direction = this.getNewDirection(cmd);
      } else if (cmd === 'M') {
        this.move();
      } else {
        throw new Error('Invalid command');
      }
    });
  }

  public getCurrentPosition(): string {
    return `${this.coordX} ${this.coordY} ${this.direction}`;
  }
  
  protected getNewDirection(cmd: Exclude<Command, 'M'>): Direction {
    return this.dirMap[this.direction][cmd];
  }

  protected move(): void {
    switch (this.direction) {
      case 'N':
        this.coordY += 1;
        break;
      case 'S':
        if (this.coordY >= 1) {
          this.coordY -= 1;
        }
        break;
      case 'E':
        this.coordX += 1;
        break;
      case 'W':
        if (this.coordX >= 1) {
          this.coordX -= 1;
        }
        break;
      default:
        break;
    }
  }
}
