import { sum } from '../02-sum';
import { mul } from '../04-mul';
import { liftF } from '.';

describe('liftF', () => {
  it('should take a binary function and make it callable with two invocations', () => {
    const liftedAdd = liftF(sum);
    const liftedMul = liftF(mul);

    const seven = liftedAdd(3)(4);
    const eight = liftedMul(2)(4);

    expect(seven).toBe(7);
    expect(eight).toBe(8);
  });
});
