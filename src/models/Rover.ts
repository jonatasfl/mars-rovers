import { oneOf, min } from "validators";

type Command = 'L' | 'R' | 'M';
type Direction = 'N' | 'S' | 'E' | 'W';

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

  /* public move(directions: ): void {
    directions.forEach((dir) => {
      switch (dir) {
        case 'N':
          this.moveNorth();
          break;
        case 'S':
          this.moveSouth();
          break;
        case 'E':
          this.moveEast();
          break;
        case 'W':
          this.moveWest();
          break;
        default:
          break;
      }
    });
  } */

  public getCurrentPosition(): string {
    return `${this.coordX} ${this.coordY} ${this.direction}`;
  }

  protected setDirection(dir: Direction): void {
    this.direction = dir;
  }

  protected moveNorth(): void {
    this.coordY += 1;
  }

  protected moveSouth(): void {
    if (this.coordY >= 1) {
      this.coordY -= 1;
    }
  }

  protected moveEast(): void {
    this.coordX += 1;
  }

  protected moveWest(): void {
    if (this.coordX >= 1) {
      this.coordX -= 1;
    }
  }
}
