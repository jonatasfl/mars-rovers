import { min } from "../validators";

interface MaxBounds {
  topRightX: number;
  topRightY: number;
}

export default class Plateau {

  @min(1)
  private topRightX: number;

  @min(1)
  private topRightY: number;

  constructor(topRightX: number, topRightY: number) {
    this.topRightX = topRightX;
    this.topRightY = topRightY;
  }

  getMaxBounds(): MaxBounds {
    return {
      topRightX: this.topRightX,
      topRightY: this.topRightY,
    };
  }
}
