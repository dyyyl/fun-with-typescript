import { liftF } from '../06-liftF';
// Write a function `curry` that takes a binary function and an arguement, and returns a function that can take a second argument.
// const add3 = curry(add, 3);
// add3(4); //=> 7
// curry(mul, 5)(6) //=> 30
export const curry = (func: Binary, first: number): Unary => (second): number =>
  func(first, second);

export const curryL = (func: Binary, first: number): Unary => liftF(func)(first);
