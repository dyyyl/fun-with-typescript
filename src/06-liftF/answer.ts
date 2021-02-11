// Write a function `liftF` that takes a binary function and makes it callable with two invocations
// const liftAdd = liftF(add);
// liftAdd(3)(4); //=> 7
// liftMul(2)(4); // => 8

/**
 * Accepts a binary function and curries to make new function callable with two invocations
 * @param func some binary function
 */
export const liftF = (func: Binary) => (first: number): Unary => (second): number =>
  func(first, second);
