import { getNewDirection } from "helpers/misc";
import { Direction, DirMap } from "interfaces/rover";
import { oneOf, min } from "validators";

export default class Rover {
  @min(0)
  private coordX: number;

  @min(0)
  private coordY: number;

  @oneOf(['N', 'S', 'E', 'W'])
  private direction: Direction;

  constructor(coordX: number, coordY: number, direction: Direction) {
    this.coordX = coordX;
    this.coordY = coordY;
    this.direction = direction;
  }

  public execute(commands: string): string {
    const cmdArray = commands.split('');

    cmdArray.forEach(cmd => {
      if (cmd === 'L' || cmd === 'R') {
        this.direction = getNewDirection(this.direction, cmd);
      } else if (cmd === 'M') {
        this.move();
      } else {
        throw new Error('Invalid command');
      }
    });

    return this.getCurrentPosition();
  }

  protected getCurrentPosition(): string {
    return `${this.coordX} ${this.coordY} ${this.direction}`;
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
    }
  }
}
