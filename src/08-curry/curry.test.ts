import { sum } from '../02-sum';
import { curry } from '.';

describe('curry', () => {
  it('should take a binary function and an argument, and return a function that can take a second argument', () => {
    const add3 = curry(sum, 3);

    const seven = add3(4);
    const eight = add3(5);

    expect(seven).toBe(7);
    expect(eight).toBe(8);
  });
});
