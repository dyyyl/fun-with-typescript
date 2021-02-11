import { sub } from '../03-sub';
import { reverse } from '.';

describe('reverse', () => {
  it('should apply an operation to some binary function with the arguments in reverse', () => {
    const bus = reverse(sub);

    const negativeOne = bus(3, 2);

    expect(negativeOne).toBe(-1);
  });
});
