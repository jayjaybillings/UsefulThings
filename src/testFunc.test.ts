//testFunc.test.ts

import { testFunc } from '../src/testFunc';

describe('test function', () => {
  it('should return 0.0 for testFunc()', () => {
    expect(testFunc()).toBe(0.0);
  });
});
