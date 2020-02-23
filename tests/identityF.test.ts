import { identityF } from '../src/index';

describe('identity', () => {
  it('should return the identity of whatever it is passed', () => {
    const threeF = identityF(3);
    const unicornF = identityF('🦄');

    const three = threeF();
    const unicorn = unicornF();

    expect(three).toBe(3);
    expect(unicorn).toMatch(/🦄/);
  });
});
