import { getNewDirection } from "../helpers/misc";
import { oneOf, min } from "../validators";
import Plateau from "./Plateau";

export type Command = 'L' | 'R' | 'M';
export type Direction = 'N' | 'S' | 'E' | 'W';

export default class Rover {
  @min(0)
  private coordX: number;

  @min(0)
  private coordY: number;

  @oneOf(['N', 'S', 'E', 'W'])
  private direction: string;

  private plateau: Plateau;

  constructor(plateau: Plateau, coordX: number, coordY: number, direction: string) {
    const { topRightX, topRightY } = plateau.getMaxBounds();
    if (coordX > topRightX || coordY > topRightY) {
      throw new Error('Out of plateau bounds');
    }

    this.plateau = plateau;
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

    return `${this.coordX} ${this.coordY} ${this.direction}`;
  }

  protected move(): void {
    switch (this.direction) {
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
    }
  }

  protected moveNorth(): void {
    const newCoodY = this.coordY + 1;
    if (newCoodY > this.plateau.getMaxBounds()['topRightY']) {
      throw new Error('Plateau bounds exceeded');
    }

    this.coordY = newCoodY;
  }

  protected moveSouth(): void {
    const newCoordY = this.coordY - 1;
    if (newCoordY < 0) {
      throw new Error('Plateau bounds exceeded');
    }

    this.coordY = newCoordY;
  }

  protected moveEast(): void {
    const newCoordX = this.coordX + 1;
    if (newCoordX > this.plateau.getMaxBounds()['topRightX']) {
      throw new Error('Plateau bounds exceeded');
    }

    this.coordX = newCoordX;
  }

  protected moveWest(): void {
    const newCoordX = this.coordX - 1;
    if (newCoordX < 0) {
      throw new Error('Plateau bounds exceeded');
    }

    this.coordX = newCoordX;
  }
}
