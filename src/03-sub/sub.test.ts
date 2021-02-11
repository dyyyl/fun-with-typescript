import { sub } from '.';

describe('sub', () => {
  it('should return the difference between two numbers', () => {
    const four = sub(7, 3);
    const fourAgain = sub(5, 1);
    const five = sub(10, 5);

    expect(four).toBe(4);
    expect(fourAgain).toBe(4);
    expect(five).toBe(5);
  });
});
