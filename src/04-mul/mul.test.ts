import { mul } from '.';

describe('mul', () => {
  it('should return the product of two numbers', () => {
    const three = mul(3, 1);
    const twelve = mul(6, 2);
    const twenty = mul(5, 4);

    expect(three).toBe(3);
    expect(twelve).toBe(12);
    expect(twenty).toBe(20);
  });
});
