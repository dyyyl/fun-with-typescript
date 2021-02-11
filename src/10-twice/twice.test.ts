import { sum } from '../02-sum';
import { mul } from '../04-mul';
import { twice } from '.';

describe('twice', () => {
  it('should apply an operation to some number twice', () => {
    const double = twice(sum);
    const square = twice(mul);

    const four = double(2);
    const twentyFive = square(5);

    expect(four).toBe(4);
    expect(twentyFive).toBe(25);
  });
});
