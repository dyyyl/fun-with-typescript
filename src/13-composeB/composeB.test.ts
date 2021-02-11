import { sum } from '../02-sum';
import { sub } from '../03-sub';
import { mul } from '../04-mul';
import { composeB } from '.';

describe('composeB', () => {
  it('should take two binary functions and returns a function that calls them both', () => {
    const addMul = composeB(sum, mul);
    const addSub = composeB(sum, sub);

    const thirtyFive = addMul(2, 3, 7);
    const twenty = addSub(17, 8, 5);

    expect(thirtyFive).toBe(35);
    expect(twenty).toBe(20);
  });
});
