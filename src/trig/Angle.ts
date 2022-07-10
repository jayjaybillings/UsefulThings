/**
 * This is a simple class for storing an angle, converting between different units, and performing various operations intrinsic to angles.
 *
 * Trigonometric functions for angles are defined elsewhere.
 *
 * All angular values are stored internally in radians and converted on write when written in any other form.
 */
export class Angle {
  /// The angle, stored in radians
  private angle: number = 0.0;

  /**
   * Constructor
   * @param _angle value that the angle should be initialized to in radians, default = 0.0 rad.
   */
  constructor(_angle: number = 0.0) {
    // Forward - keep all radian setter logic in set().
    this.set(_angle);
  }

  /**
   * This function sets the value of the angle in radians.
   * @param number value that the angle should be in radians, default = 0.0 rad.
   */
  public set(_angle: number = 0.0) {
    this.angle = _angle;
  }

  /**
   * This function returns the value of the angle in radians.
   * @return the value of the angle in radians
   */
  public get(): number {
    return this.angle;
  }
}
