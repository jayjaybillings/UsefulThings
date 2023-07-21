/**
 * This is a collection of vector interfaces and classes.
 */


export interface Vector {
  add(vec: Vector): Vector;
  subtract(vec: Vector): Vector;
  dot(vec: Vector): Vector;
}

export class BaseVector implements Vector {

  add(vec: Vector): Vector {
    return null;
  }

  subtract(vec: Vector): Vector {
    return null;
  }

  dot(vec: Vector): Vector {
    return null;
  }

}