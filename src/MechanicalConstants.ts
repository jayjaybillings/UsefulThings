// Mechanical constants

export class MechanicalConstants {
  /**
   * The standard acceleration due to gravity at the earth's surface is defined as the average value of g across the Earth's surface in meters per second.
   */
  public static g: number = 9.80665;
  public static g_units: string = 'm/s';

  // Could make an interface with the physical constant value and metadata that could probably do units conversion too. This class would then change to provide the values by accessors. I'll probably investigate that if I need to switch to cgs or SAE.
}
