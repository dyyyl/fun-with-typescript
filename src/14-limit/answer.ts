// Write a function `limit` that allows a binary function to be called a limited amount of times
// const addLimited = limit(add, 1);
// addLimited(3, 4); //=> 7
// addLimited(3, 5); //=> undefined
export const limit = (func: Binary, count: number) => {
  return (first: number, second: number): Maybe<number> => {
    if (count >= 1) {
      count -= 1;
      return func(first, second);
    }
    return undefined;
  };
};
