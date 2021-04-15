type Direction = 'N' | 'S' | 'E' | 'W';

export default class Rover {
  private coordX: number;

  private coordY: number;

  private direction: Direction;

  constructor(coordX: number, coordY: number, direction: Direction) {
    if (coordX < 0 || coordY < 0) {
      throw new Error('Invalid coordinates');
    }

    this.coordX = coordX;
    this.coordY = coordY;
    this.direction = direction;
  }

  public move(directions: Direction[]): void {
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
