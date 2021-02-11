// Write a function `from` that produces a generator that will produce a series of values
// const index = from(0);
// index(); //=> 0
// index(); //=> 1
// index(); //=> 2
export const from = (start: number) => (): number => {
  const next = start;
  start += 1;
  return next;
};
