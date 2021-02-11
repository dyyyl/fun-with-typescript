import { sum } from '../02-sum';
import { sub } from '../03-sub';
import { limit } from '.';

describe('composeB', () => {
  it('should allow a binary function to be called a limited amount of times', () => {
    const addLimited = limit(sum, 1);
    const subLimited = limit(sub, 2);

    const add0 = addLimited(5, 5);
    const add1 = addLimited(6, 6);

    const sub0 = subLimited(5, 5);
    const sub1 = subLimited(6, 5);
    const sub2 = subLimited(5, 5);

    expect(add0).toBe(10);
    expect(add1).toBe(undefined);

    expect(sub0).toBe(0);
    expect(sub1).toBe(1);
    expect(sub2).toBe(undefined);
  });
});
