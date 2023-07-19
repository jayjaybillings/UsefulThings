/**
 * This is a collection of routines for modeling the trajectories of objections undergoing projectile motion.
 */

import { MechanicalConstants } from '../MechanicalConstants';

/**
 * This function provides the standard gravitational acceleration for an object falling in the absence of drag (e.g. - in a vacuum).
 */
export function standardGravitationalAcceleration() {
  return -1.0 * MechanicalConstants.g;
}
