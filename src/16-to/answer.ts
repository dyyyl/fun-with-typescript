// Write a function `to` that takes a generator and an end value, and returns a generator that will return numbers up to that limit
// const index = to(from(1), 3);
// index(); //=> 1
// index(); //=> 2
// index(); // undefine
export const to = (generator: GeneratorFunc, end: number) => (): Maybe<number> => {
  const value = generator();
  if (value < end) return value;
  return undefined;
};
