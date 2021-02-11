// Write a function `composeB` that takes two binary functions and returns a function that calls them both
// composeB(add, mul)(2, 3, 7) //=> 35
export const composeB = (f: Binary, g: Binary) => (a: number, b: number, c: number): number =>
  g(f(a, b), c);
