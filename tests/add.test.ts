import { add } from '../src/index';

describe('add', () => {
  it('should return the sum of two numbers', () => {
    const three = add(3, 0);
    const threeAgain = add(1, 2);
    const five = add(2, 3);

    expect(three).toBe(3);
    expect(threeAgain).toBe(3);
    expect(five).toBe(5);
  });
});
