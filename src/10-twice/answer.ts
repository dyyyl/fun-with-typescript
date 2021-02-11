// Write a function `twice` that takes a binary function and returns a unary function that passes its argument to the binary function twice
// const double = twice(add);
// double(11); //=> 22
// const square = twice(mul);
// square(11); //=> 121
export const twice = (func: Binary): Unary => (only): number => func(only, only);
