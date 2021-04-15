interface MaxBounds {
  topRightX: number;
  topRightY: number;
}

export default class Plateau {
  private topRightX: number;

  private topRightY: number;

  constructor(topRightX: number, topRightY: number) {
    if (topRightX <= 0 || topRightY <= 0) {
      throw new Error('Coordinates must be greater than 0');
    }

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
