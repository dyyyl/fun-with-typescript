import { sum } from '.';

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    const three = sum(3, 0);
    const threeAgain = sum(1, 2);
    const five = sum(2, 3);

    expect(three).toBe(3);
    expect(threeAgain).toBe(3);
    expect(five).toBe(5);
  });
});
