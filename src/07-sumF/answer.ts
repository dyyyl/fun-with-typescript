import { sum } from '../02-sum';
import { liftF } from '../06-liftF';

// Write a function `sumF` that adds from two invocations
// addF(2)(3); //=> 5
export const sumF = liftF(sum);
