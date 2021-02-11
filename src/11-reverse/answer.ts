// Write a function `reverse` that reverses the arguments of a binary function
// const bus = reverse(sub);
// bus(3, 2); //=> -1
export const reverse = (func: Binary): Binary => (first, second): number => func(second, first);
