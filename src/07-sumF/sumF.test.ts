import { sumF } from '.';

describe('sumF', () => {
  it('should take two function invocations and sum their values', () => {
    const seven = sumF(3)(4);
    const eight = sumF(4)(4);

    expect(seven).toBe(7);
    expect(eight).toBe(8);
  });
});
