//ProjectileMotion.test.ts

import { standardGravitationalAcceleration } from '../src/projectile_motion/ProjectileMotion';
import { MechanicalConstants } from '../src/MechanicalConstants';

describe('Projectile motion tests', () => {
  let a = standardGravitationalAcceleration();

  // Standard gravitational acceleration test
  it('Constant acceleration in standard gravity should equal -g', () => {
    // Check that the result is g
    expect(a).toBe(-1.0 * MechanicalConstants.g);
  });
});
