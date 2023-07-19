//ProjectileMotion.test.ts

import { ProjectileMotion } from '../../src/projectile_motion/ProjectileMotion';

describe('test function', () => {
  let testAngle = new Angle();

  // Angle.radians() test
  it('should return 0.0 and then pi/2 for Angle.radians()', () => {
    // Check that the initial value is 0.0 rad
    expect(testAngle.get()).toBe(0.0);

    // Check radians(Math.PI/2.0) sets the value appropriately
    testAngle.set(Math.PI / 2.0);
    expect(testAngle.get()).toBe(Math.PI / 2.0);
  });

  // Angle.degress() test
});
