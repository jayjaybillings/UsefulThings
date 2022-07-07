export class Angle {
  private angle: number;

  constructor(_angle: number) {
    this.angle = _angle;
  }

  public radians(): number {
    return this.angle;
  }
}
