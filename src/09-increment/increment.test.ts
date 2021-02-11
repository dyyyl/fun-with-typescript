import { increment } from '.';

describe('increment', () => {
  it('should return one number higher than the number given', () => {
    const three = increment(2);
    const four = increment(three);

    expect(three).toBe(3);
    expect(four).toBe(4);
  });
});
