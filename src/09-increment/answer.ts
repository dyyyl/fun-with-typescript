import { sum } from '../02-sum';
// Without writing any new functions, demonstrate three ways of implementing a function increment
// const increment = _ _ _;
// increment(5); //=> 6
// increment(6); //=> 7
export const increment: Unary = (first) => sum(first, 1);
// export const increment = (first: number): number => liftF(add)(1)(first);
// export const increment = (first: number): number => addF(first)(1);
// export const increment = (first: number): number => curry(add, 1)(first);
