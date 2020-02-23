import { identity } from '../src/index';

describe('identity', () => {
  it('should return the identity of whatever it is passed', () => {
    const three = identity(3);
    const unicorn = identity('🦄');

    expect(three).toBe(3);
    expect(unicorn).toMatch(/🦄/);
  });
});
