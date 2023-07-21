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
    return new BaseVector();
  }

  subtract(vec: Vector): Vector {
    return new BaseVector();
  }

  dot(vec: Vector): Vector {
    return new BaseVector();
  }

}
