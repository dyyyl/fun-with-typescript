import { sum } from '../02-sum';
import { mul } from '../04-mul';
import { twice } from '../10-twice';
import { composeU } from '.';

describe('composeU', () => {
  it('should take two unary functions and returns a function that calls them both', () => {
    const double = twice(sum);
    const square = twice(mul);

    const doubleSquare = composeU(double, square);
    const hundred = doubleSquare(5);

    expect(hundred).toBe(100);
  });
});
